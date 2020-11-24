package dao;

import connection.NewConectaBanco;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Casa;

public class DaoCasa extends DAO {

    private Casa casa;
    private Connection con;
    private PreparedStatement stmt = null;
    private ResultSet rs = null;
    private List<Casa> casas;

    public DaoCasa(List<Casa> casas) {
        //this.casa = casa;
        this.casas = casas;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoCasa(Casa casa) {
        this.casa = casa;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoCasa() {
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    @Override
    public boolean create() {
        String sql = "INSERT INTO casa (id, latitude, longitude, zona, folha, pontos, digitador) VALUES (?,?,?,?,?,?,?)";
        String verificarSQL = "select * from casa where latitude=? and longitude=? and zona=? and folha=? and pontos=? and digitador=?";
        
        try {
            stmt = con.prepareStatement(verificarSQL);
            stmt.setString(1, casa.getLatitude());
            stmt.setString(2, casa.getLongitude());
            stmt.setString(3, casa.getZona());
            stmt.setString(4, casa.getFolha());
            stmt.setString(5, casa.getPontos());
            stmt.setString(6, casa.getDigitador());
            rs = stmt.executeQuery();
            if (rs.next()) {
                System.out.println("casa " + casa.getId() + " Ja cadastrada ");
            } else {
                stmt = con.prepareStatement(sql);
                stmt.setString(1, casa.getId());
                stmt.setString(2, casa.getLatitude());
                stmt.setString(3, casa.getLongitude());
                stmt.setString(4, casa.getZona());
                stmt.setString(5, casa.getFolha());
                stmt.setString(6, casa.getPontos());
                stmt.setString(7, casa.getDigitador());
                stmt.executeUpdate();
            }
            return true;
        } catch (SQLException ex) {
            System.out.println("Error :: " + ex);
            return false;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt);
        }
    }

    @Override
    public List<?> read() {
        List<Casa> listCasa = new ArrayList<>();
        try {
            String sql = "SELECT * FROM casa";
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            while (rs.next()) {

                casa = new Casa();
                casa.setId(rs.getString("id"));
                casa.setLatitude(rs.getString("latitude"));
                casa.setLongitude(rs.getString("longitude"));
                casa.setZona(rs.getString("zona"));
                casa.setFolha(rs.getString("folha"));
                casa.setPontos(rs.getString("pontos"));
                casa.setDigitador(rs.getString("digitador"));
                listCasa.add(casa);
            }
            return listCasa;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    @Override
    public boolean update() {
        return false;
    }

    public boolean update(Casa casa) {
        try {
            String sql = "UPDATE casa SET latitude = ?, longitude =?, zona=?,  folha=?, pontos=? where id = ?";
            stmt = con.prepareStatement(sql);
            stmt.setString(1, casa.getLatitude());
            stmt.setString(2, casa.getLongitude());
            stmt.setString(3, casa.getZona());
            stmt.setString(4, casa.getFolha());
            stmt.setString(5, casa.getPontos());
            stmt.setString(6, casa.getId());
            stmt.executeUpdate();
            return true;
        } catch (SQLException ex) {
            Logger.getLogger(DaoCasa.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }

    @Override
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public void delete(String id) {
        String sql = "DELETE FROM casa WHERE id = ?";
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, id);
            stmt.executeUpdate();
            System.out.println("Teste1  || " + stmt.executeUpdate());

        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);

        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    public Casa read(String idCasa) {
        try {
            String sql = "SELECT * FROM casa where id= ?";
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            rs = stmt.executeQuery();
            casa = new Casa();
            while (rs.next()) {
                casa.setId(rs.getString("id"));
                casa.setLatitude(rs.getString("latitude"));
                casa.setLongitude(rs.getString("longitude"));
                casa.setZona(rs.getString("zona"));
                casa.setFolha(rs.getString("folha"));
                casa.setPontos(rs.getString("pontos"));
                casa.setDigitador(rs.getString("digitador"));
            }
            return casa;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

}
