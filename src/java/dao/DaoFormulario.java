/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
import model.FormularioRenda;

/**
 *
 * @author felipeneves
 */
public class DaoFormulario extends DAO {

    private Connection con;
    private PreparedStatement stmt = null;
    private ResultSet rs = null;
    private FormularioRenda formularioRenda;

    public DaoFormulario(FormularioRenda formularioRenda) {

        this.formularioRenda = formularioRenda;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoFormulario() {
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    @Override
    public boolean create() {
        String sql = "INSERT INTO renda ("
                + "macrozona, "
                + "zona, "
                + "populaibge, "
                + "numdomicilio, "
                + "habitantedomicilio, "
                + "populatotal, "
                + "meiosalario, "
                + "meio_a_um, "
                + "um_a_dois, "
                + "dois_a_tres, "
                + "tres_a_cinco, "
                + "cinco_a_dez, "
                + "dez_a_quinze, "
                + "quinze_a_vinte, "
                + "acima_de_vinte, "
                + "semredimento, "
                + "com_ou_semredimento, "
                + "menores_dezanos, "
                + "censitarios, "
                + "ano, "
                + "cidade"
                + ") VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, formularioRenda.getMacroZonaDiretor());
            stmt.setString(2, formularioRenda.getZona());
            stmt.setString(3, formularioRenda.getPopulacaoIbge());
            stmt.setString(4, formularioRenda.getNumIBGE());
            stmt.setString(5, formularioRenda.getHabitacaoDomicilio());
            stmt.setString(6, formularioRenda.getLevantamentoRendaPico());
            stmt.setString(7, formularioRenda.getMeioSalario());
            stmt.setString(8, formularioRenda.getMeioSalarioAum());
            stmt.setString(9, formularioRenda.getUmSalarioAdois());
            stmt.setString(10, formularioRenda.getDoisSalarioAtres());
            stmt.setString(11, formularioRenda.getTresSalarioAcinco());
            stmt.setString(12, formularioRenda.getCincoSalarioAdez());
            stmt.setString(13, formularioRenda.getDezSalarioAquinze());
            stmt.setString(14, formularioRenda.getQuinzeSalarioAvinte());
            stmt.setString(15, formularioRenda.getDezAnos());
            stmt.setString(16, formularioRenda.getSemRedimento());
            stmt.setString(17, formularioRenda.getComRedimento());
            stmt.setString(18, formularioRenda.getMenoresDezAnos());
            stmt.setString(19, formularioRenda.getCensitarios());
            stmt.setString(20, formularioRenda.getAno() + "");
            stmt.setString(21, formularioRenda.getCidade());

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
        List<FormularioRenda> listForm = new ArrayList<>();
        try {
            String sql = "SELECT * FROM renda";
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            while (rs.next()) {

                formularioRenda = new FormularioRenda();
                formularioRenda.setId(rs.getInt("id"));
                formularioRenda.setMacroZonaDiretor(rs.getString("macrozona"));
                formularioRenda.setZona(rs.getString("zona"));
                formularioRenda.setPopulacaoIbge(rs.getString("populaibge"));
                formularioRenda.setNumIBGE(rs.getString("numdomicilio"));
                formularioRenda.setHabitacaoDomicilio(rs.getString("habitantedomicilio"));
                formularioRenda.setLevantamentoRendaPico(rs.getString("populatotal"));
                formularioRenda.setMeioSalario(rs.getString("meiosalario"));
                formularioRenda.setMeioSalarioAum(rs.getString("meio_a_um"));
                formularioRenda.setUmSalarioAdois(rs.getString("um_a_dois"));
                formularioRenda.setDoisSalarioAtres(rs.getString("dois_a_tres"));
                formularioRenda.setTresSalarioAcinco(rs.getString("tres_a_cinco"));
                formularioRenda.setCincoSalarioAdez(rs.getString("cinco_a_dez"));
                formularioRenda.setDezSalarioAquinze(rs.getString("dez_a_quinze"));
                formularioRenda.setQuinzeSalarioAvinte(rs.getString("quinze_a_vinte"));
                formularioRenda.setDezAnos(rs.getString("acima_de_vinte"));
                formularioRenda.setSemRedimento(rs.getString("semredimento"));
                formularioRenda.setComRedimento(rs.getString("com_ou_semredimento"));
                formularioRenda.setMenoresDezAnos(rs.getString("menores_dezanos"));
                formularioRenda.setCensitarios(rs.getString("censitarios"));
                formularioRenda.setAno(Integer.parseInt(rs.getString("ano")));
                formularioRenda.setCidade(rs.getString("cidade"));
                System.out.println("Lendo Formulario do Banco => " + formularioRenda.toString());
                listForm.add(formularioRenda);
            }
            return listForm;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    @Override
    public boolean update() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
