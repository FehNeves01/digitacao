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
import model.FormularioRenda;
import model.Opniao;

public class DaoOpniao extends DAO {

    private Connection con;
    private PreparedStatement stmt = null;
    private ResultSet rs = null;
    private Opniao opniao;

    public DaoOpniao(Opniao opniao) {

        this.opniao = opniao;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoOpniao() {
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    @Override
    public boolean create() {
        String sql = "INSERT INTO formopniao ("
                + "numformulario, "
                + "data, "
                + "hora, "
                + "horaviagem, "
                + "linha, "
                + "um, "
                + "dois, "
                + "tres, "
                + "quatro, "
                + "cinco, "
                + "seis, "
                + "sete, "
                + "oito, "
                + "nove, "
                + "dez, "
                + "onze, "
                + "doze, "
                + "treze, "
                + "quatorze, "
                + "quinze, "
                + "dezesseis, "
                + "dezessete, "
                + "dezoito, "
                + "dezenove, "
                + "vinte, "
                + "vinteeum "
                + ") VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, opniao.getNumformulario());
            stmt.setString(2, opniao.getData());
            stmt.setString(3, opniao.getHora());
            stmt.setString(4, opniao.getHoraviagem());
            stmt.setString(5, opniao.getLinha());
            stmt.setString(6, opniao.getUm());
            stmt.setString(7, opniao.getDois());
            stmt.setString(8, opniao.getTres());
            stmt.setString(9, opniao.getQuatro());
            stmt.setString(10, opniao.getCinco());
            stmt.setString(11, opniao.getSeis());
            stmt.setString(12, opniao.getSete());
            stmt.setString(13, opniao.getOito());
            stmt.setString(14, opniao.getNove());
            stmt.setString(15, opniao.getDez());
            stmt.setString(16, opniao.getOnze());
            stmt.setString(17, opniao.getDoze());
            stmt.setString(18, opniao.getTreze());
            stmt.setString(19, opniao.getQuatorze());
            stmt.setString(20, opniao.getQuinze());
            stmt.setString(21, opniao.getDezesseis());
            stmt.setString(22, opniao.getDezessete());
            stmt.setString(23, opniao.getDezoito());
            stmt.setString(24, opniao.getDezenove());
            stmt.setString(25, opniao.getVinte());
            stmt.setString(26, opniao.getVinteeum());

            stmt.executeUpdate();
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
        List<Opniao> listOpniao = new ArrayList<>();
        try {
            String sql = "SELECT * FROM formopniao";
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            while (rs.next()) {

                opniao = new Opniao();
                opniao.setId(rs.getInt("id"));
                opniao.setNumformulario(rs.getString("numformulario"));
                opniao.setData(rs.getString("data"));
                opniao.setHora(rs.getString("hora"));
                opniao.setHoraviagem(rs.getString("horaviagem"));
                opniao.setLinha(rs.getString("linha"));
                opniao.setUm(rs.getString("um"));
                opniao.setDois(rs.getString("dois"));
                opniao.setTres(rs.getString("tres"));
                opniao.setQuatro(rs.getString("quatro"));
                opniao.setCinco(rs.getString("cinco"));
                opniao.setSeis(rs.getString("seis"));
                opniao.setSete(rs.getString("sete"));
                opniao.setOito(rs.getString("oito"));
                opniao.setNove(rs.getString("nove"));
                opniao.setDez(rs.getString("dez"));
                opniao.setOnze(rs.getString("onze"));
                opniao.setDoze(rs.getString("doze"));
                opniao.setTreze(rs.getString("treze"));
                opniao.setQuatorze(rs.getString("quatorze"));
                opniao.setQuinze(rs.getString("quinze"));
                opniao.setDezesseis(rs.getString("dezesseis"));
                opniao.setDezessete(rs.getString("dezessete"));
                opniao.setDezoito(rs.getString("dezoito"));
                opniao.setDezenove(rs.getString("dezenove"));
                opniao.setVinte(rs.getString("vinte"));
                opniao.setVinteeum(rs.getString("vinteeum"));
                System.out.println("Lendo Formulario do Banco => " + opniao.toString());
                listOpniao.add(opniao);
            }
            return listOpniao;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

    @Override
    public boolean update() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
