package connection;

import java.io.File;
import java.io.FileInputStream;
import java.sql.DriverManager;
import java.util.Properties;

public class ConectaBanco {

    public String driver;
    public String url;
    public String user;
    public String password;
    //Minha Maquina Alterar Path
    //public static String path = "C:\\Users\\felip\\eclipse-workspace\\Digitacao\\WebContent\\WEB-INF\\properties\\db.properties";

    //maquina IPK aletrar Path
//    private File file = new File("/jspupload/props", "digitacao.properties");
    private File file = new File ("/Users/felipeneves/NetBeansProjects/Digitacao/web/WEB-INF/properties/digitacao.properties");
    public static String filePath = "";

    public ConectaBanco() throws Exception {
   Properties props = new Properties();
   System.out.println(file.exists());
   for (int i = 0; i < 10; i++) {
  try {

      props.load(new FileInputStream(file));
      driver = props.getProperty("dbJdbcDriver" + i);
      url = props.getProperty("dbUrl" + i);
      user = props.getProperty("dbUser" + i);
      password = props.getProperty("dbSenha" + i);
      
  } catch (java.io.FileNotFoundException ex) {

  }
  // Conectando
  for (int j = 0; j < 5; j++) {
      try {
     Class.forName(driver);
     System.out.println("Conectando ao banco");
     System.out.println("DriverManager.getConnection(" + url + "," + user + "," + password + ")");
     DriverManager.getConnection(url, user, password);
     return;
      } catch (Exception e) {

      }
  }
   }
   throw new Exception("Nao foi possivel fazer login no banco de dados.\n");
    }

}
