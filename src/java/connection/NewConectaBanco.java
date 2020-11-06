package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author felip
 */
public class NewConectaBanco {

    private static ConectaBanco login;

    public static Connection getConnection() {
   try {
  System.out.println("Chegou aqui!");
  String dbUrl = "", dbUser = "", dbSenha = "";
  if (login == null) {
      login = new ConectaBanco();
  }
  Class.forName(login.driver);
  dbUrl = login.url;
  dbUser = login.user;
  dbSenha = login.password;
  System.out.print(dbUser);
  for (int i = 0; i < 5; i++) {
      try {
     return DriverManager.getConnection(dbUrl, dbUser, dbSenha);
      } catch (Exception e) {
      }
  }
  return null;

   } catch (Exception e) {
  e = new Exception("Nao foi possivel conectar ao banco de dados.");
  e.printStackTrace();
  return null;
   }
    }

    public static void closeConneciton(Connection con) {

   try {
  if (con != null) {
      con.close();
  }

   } catch (SQLException e) {
  // TODO Auto-generated catch block
  e.printStackTrace();
   }
    }

    public static void closeConneciton(Connection con, PreparedStatement stmt) {
   closeConneciton(con);
   try {
  if (stmt != null) {
      stmt.close();
  }

   } catch (SQLException e) {
  // TODO Auto-generated catch block
  e.printStackTrace();
   }
    }

    public static void closeConneciton(Connection con, PreparedStatement stmt, ResultSet rs) {
   closeConneciton(con, stmt);
   try {
  if (rs != null) {
      rs.close();
  }

   } catch (SQLException e) {
  // TODO Auto-generated catch block
  e.printStackTrace();
   }
    }
}
