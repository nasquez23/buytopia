package org.buytopia.services;

import com.google.api.client.http.FileContent;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.auth.http.HttpCredentialsAdapter;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.gson.Gson;

@Service
public class GoogleDriveService {

    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    @Value("${google.drive.client.id}")
    private String CLIENT_ID;

    @Value("${google.drive.client.email}")
    private String CLIENT_EMAIL;

    @Value("${google.drive.private.key}")
    private String PRIVATE_KEY;

    @Value("${google.drive.private.key.id}")
    private String PRIVATE_KEY_ID;

    @Value("${google.drive.project.id}")
    private String PROJECT_ID;

    @Value("${google.drive.token.uri}")
    private String TOKEN_URI;

    @Value("${google.drive.auth.uri}")
    private String AUTH_URI;

    @Value("${google.drive.auth.provider.x509}")
    private String AUTH_PROVIDER_X509_CERT_URL;

    @Value("${google.drive.cert.url}")
    private String CLIENT_X509_CERT_URL;

    @Value("${google.drive.folder.id}")
    private String FOLDER_ID;

    public String uploadImage(MultipartFile image) {
        try {
            File file = convertMultipartFileToFile(image);
            Drive drive = createDriveService();
            com.google.api.services.drive.model.File fileMetadata = new com.google.api.services.drive.model.File();
            fileMetadata.setName(file.getName());
            fileMetadata.setParents(Collections.singletonList(FOLDER_ID));
            String mimeType = Files.probeContentType(file.toPath());
            FileContent mediaContent = new FileContent(mimeType, file);
            com.google.api.services.drive.model.File fileUploaded = drive.files().create(fileMetadata, mediaContent)
                    .setFields("id").execute();
            
            String imageUrl = "https://drive.google.com/thumbnail?id={ID}&sz=w1000".replace("{ID}", fileUploaded.getId());
            file.delete();

            return imageUrl;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        return "";
    }

    public void deleteImage(String imageUrl) {
        try {
            String imageId = imageUrl.split("id=")[1].split("&")[0];
            Drive drive = createDriveService();
            drive.files().delete(imageId).execute();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }

    private Drive createDriveService() throws Exception {
        Map<String, Object> serviceAccount = new HashMap<>();
        serviceAccount.put("type", "service_account");
        serviceAccount.put("project_id", PROJECT_ID);
        serviceAccount.put("private_key_id", PRIVATE_KEY_ID);
        serviceAccount.put("private_key", PRIVATE_KEY.replace("\\n", "\n"));
        serviceAccount.put("client_email", CLIENT_EMAIL);
        serviceAccount.put("client_id", CLIENT_ID);
        serviceAccount.put("auth_uri", AUTH_URI);
        serviceAccount.put("token_uri", TOKEN_URI);
        serviceAccount.put("auth_provider_x509_cert_url", AUTH_PROVIDER_X509_CERT_URL);
        serviceAccount.put("client_x509_cert_url", CLIENT_X509_CERT_URL);

        String serviceAccountJson = new Gson().toJson(serviceAccount);
        GoogleCredentials credentials = GoogleCredentials.fromStream(
                new ByteArrayInputStream(serviceAccountJson.getBytes(StandardCharsets.UTF_8)))
                .createScoped(Collections.singleton(DriveScopes.DRIVE));

        HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

        return new Drive.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                requestInitializer)
                .setApplicationName("Buytopia")
                .build();
    }

    private File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convFile = File.createTempFile("temp", file.getOriginalFilename());
        file.transferTo(convFile);
        return convFile;
    }
}
