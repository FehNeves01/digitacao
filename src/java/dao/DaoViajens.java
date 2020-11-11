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
import model.Viajens;

public class DaoViajens extends DAO {

    private Connection con;
    private PreparedStatement stmt = null;
    private ResultSet rs = null;
    private List<Viajens> listViajens;

    public DaoViajens(List<Viajens> listViajens) {
        this.listViajens = listViajens;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoViajens() {
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    @Override
    public boolean create() {
        String sql = "INSERT INTO viajens (id_casa, numero_pessoa, viajen_residencia, local, hora, destino,  zona, mot, mod, mod1, mod2, cont, digitador,numero_viagem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            for (Viajens key : listViajens) {
                stmt = con.prepareStatement(sql);
                stmt.setString(1, key.getIdCasa());
                stmt.setString(2, key.getNumeroPessoa());
                stmt.setString(3, key.getViajensResidencia());
                stmt.setString(4, key.getLocal());
                stmt.setString(5, key.getHora());
                stmt.setString(6, key.getDestino());
                stmt.setString(7, key.getZona());
                stmt.setString(8, key.getMot());
                stmt.setString(9, key.getValue());
                stmt.setString(10, key.getValue1());
                stmt.setString(11, key.getValue2());
                stmt.setString(12, key.getCont());
                stmt.setString(13, key.getDigitador());
                stmt.setString(14, key.getNumeroViagem());
                stmt.executeUpdate();
            }
            return true;
        } catch (SQLException ex) {
            Logger.getLogger(DaoCasa.class.getName()).log(Level.SEVERE, null, ex);
            return false;

        } finally {
            NewConectaBanco.closeConneciton(con, stmt);
        }
    }

    @Override
    public List<?> read() {
        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    @Override
    public boolean update() {
        return true;
    }

    @Override
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    public void delete(String idCasa) {
        String sql = "DELETE FROM viajens WHERE id_casa = ?";
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            int executeUpdate = stmt.executeUpdate();
            System.out.println(executeUpdate);
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    public List<?> read(String idCasa) {
        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens where id_casa= ?";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

 
    public List<?> read(String idCasa, String numeroViagem, String numPessoa) {
        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens where id_casa = ? and numero_viagem = ? and numero_pessoa = ? ";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setString(2, numeroViagem);
            stmt.setString(3, numPessoa);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }
    public List<?> readNumeroViagem(String idCasa,  String numPessoa) {
        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens where id_casa = ? and numero_pessoa = ? ";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setString(2, numPessoa);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }
    public List<?> readed(String idCasa, String numeroViagem) {
        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens where id_casa = ? and numero_viagem = ? ";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setString(2, numeroViagem);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

    public List<?> read(String idCasa, int id) {
        System.out.println("id casa " + idCasa);
        System.out.println("id " + id);

        List<Viajens> list = new ArrayList<>();
        String sql = "SELECT * FROM viajens where id_casa= ? and id = ?";
        Viajens viajens;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setInt(2, id);
            rs = stmt.executeQuery();
            while (rs.next()) {
                viajens = new Viajens();
                viajens.setId(rs.getInt("id"));
                viajens.setIdCasa(rs.getString("id_casa"));
                viajens.setNumeroPessoa(rs.getString("numero_pessoa"));
                viajens.setViajensResidencia(rs.getString("viajen_residencia"));
                viajens.setLocal(rs.getString("local"));
                viajens.setHora(rs.getString("hora"));
                viajens.setDestino(rs.getString("destino"));
                viajens.setZona(rs.getString("zona"));
                viajens.setMot(rs.getString("mot"));
                viajens.setValue(rs.getString("mod"));
                viajens.setValue1(rs.getString("mod1"));
                viajens.setValue2(rs.getString("mod2"));
                viajens.setCont(rs.getString("cont"));
                viajens.setDigitador(rs.getString("digitador"));
                viajens.setNumeroViagem(rs.getString("numero_viagem"));
                list.add(viajens);
            }
            return list;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

    public boolean update(String idCasa) {
        String sql = "UPDATE viajens SET "
                + "numero_pessoa = ?, "
                + "viajen_residencia = ?, "
                + "local = ?, "
                + "hora = ?, "
                + "destino = ?, "
                + "zona = ?, "
                + "mot = ?, "
                + "mod = ?, "
                + "mod1 = ?, "
                + "mod2 = ?, "
                + "cont = ?, "
                + "numero_viagem = ? "
                + "WHERE id_casa = ? AND id = ?";
        try {
            for (Viajens key : listViajens) {
                stmt = con.prepareStatement(sql);
                stmt.setString(1, key.getNumeroPessoa());
                stmt.setString(2, key.getViajensResidencia());
                stmt.setString(3, key.getLocal());
                stmt.setString(4, key.getHora());
                stmt.setString(5, key.getDestino());
                stmt.setString(6, key.getZona());
                stmt.setString(7, key.getMot());
                stmt.setString(8, key.getValue());
                stmt.setString(9, key.getValue1());
                stmt.setString(10, key.getValue2());
                stmt.setString(11, key.getCont());
                stmt.setString(12, key.getNumeroViagem());
                stmt.setString(13, idCasa);
                stmt.setInt(14, key.getId());
                stmt.executeUpdate();
            }
            return true;
        } catch (SQLException ex) {
            Logger.getLogger(DaoCasa.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt);
        }
    }
}
