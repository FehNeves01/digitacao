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
import model.Moradores;

/**
 *
 * @author felipeneves
 */
public class DaoMoradores extends DAO {

    private Connection con;
    private PreparedStatement stmt = null;
    private ResultSet rs = null;
    private List<Moradores> listMoradores;

    public DaoMoradores(List<Moradores> listMoradores) {
        this.listMoradores = listMoradores;
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    public DaoMoradores() {
        con = NewConectaBanco.getConnection();
        stmt = null;
        rs = null;
    }

    @Override
    public boolean create() {
        String sql = "INSERT INTO moradores (id_casa, numero_pessoa, nome, situacao_familiar, sexo, idade, grau, setor, renda, viajens, digitador, atividade) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            for (Moradores key : listMoradores) {
                stmt = con.prepareStatement(sql);
                stmt.setString(1, key.getIdCasa());
                stmt.setString(2, key.getNumeroPessoa());
                stmt.setString(3, key.getNome());
                stmt.setString(4, key.getSituacaoFamiliar());
                stmt.setString(5, key.getSexo());
                stmt.setString(6, key.getIdade());
                stmt.setString(7, key.getGrau());
                stmt.setString(8, key.getSetor());
                stmt.setString(9, key.getRenda());
                stmt.setString(10, key.getViajens());
                stmt.setString(11, key.getDigitador());
                stmt.setString(12, key.getSetorAtividade());
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
        listMoradores = new ArrayList<>();
        String sql = "SELECT * FROM moradores";
        Moradores moradores;
        try {
            stmt = con.prepareStatement(sql);
            rs = stmt.executeQuery();
            while (rs.next()) {
                moradores = new Moradores();
                moradores.setId(rs.getInt("id"));
                moradores.setIdCasa(rs.getString("id_casa"));
                moradores.setNumeroPessoa(rs.getString("numero_pessoa"));
                moradores.setNome(rs.getString("nome"));
                moradores.setSituacaoFamiliar(rs.getString("situacao_familiar"));
                moradores.setSexo(rs.getString("sexo"));
                moradores.setIdade(rs.getString("idade"));
                moradores.setGrau(rs.getString("grau"));
                moradores.setSetor(rs.getString("setor"));
                moradores.setRenda(rs.getString("renda"));
                moradores.setViajens(rs.getString("viajens"));
                moradores.setDigitador(rs.getString("digitador"));
                moradores.setSetorAtividade(rs.getString("atividade"));
                listMoradores.add(moradores);
            }
            return listMoradores;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    @Override
    public boolean update() {
        return false;
    }

    public boolean update(String idCasa) {
        String sql = "UPDATE moradores SET numero_pessoa = ?, nome = ?, situacao_familiar = ?, sexo = ?, "
                + "idade = ?, grau = ?, setor = ?, renda = ?, viajens = ?, atividade = ? WHERE id_casa = ? AND id=? ";
        try {
            for (Moradores key : listMoradores) {
                stmt = con.prepareStatement(sql);
                stmt.setString(1, key.getNumeroPessoa());
                stmt.setString(2, key.getNome());
                stmt.setString(3, key.getSituacaoFamiliar());
                stmt.setString(4, key.getSexo());
                stmt.setString(5, key.getIdade());
                stmt.setString(6, key.getGrau());
                stmt.setString(7, key.getSetor());
                stmt.setString(8, key.getRenda());
                stmt.setString(9, key.getViajens());
                stmt.setString(10, key.getSetorAtividade());
                stmt.setString(11, idCasa);
                stmt.setInt(12, key.getId());
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
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void delete(String idCasa) {
        String sql = "DELETE FROM moradores WHERE id_casa = ?";
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.executeUpdate();
            System.out.println("Teste2  || "+ stmt.executeUpdate());
            
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }
    }

    public List<?> read(String idCasa) {
        listMoradores = new ArrayList<>();
        String sql = "SELECT * FROM moradores where id_casa= ?";
        Moradores moradores;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            rs = stmt.executeQuery();
            while (rs.next()) {
                moradores = new Moradores();
                moradores.setId(rs.getInt("id"));
                moradores.setIdCasa(rs.getString("id_casa"));
                moradores.setNumeroPessoa(rs.getString("numero_pessoa"));
                moradores.setNome(rs.getString("nome"));
                moradores.setSituacaoFamiliar(rs.getString("situacao_familiar"));
                moradores.setSexo(rs.getString("sexo"));
                moradores.setIdade(rs.getString("idade"));
                moradores.setGrau(rs.getString("grau"));
                moradores.setSetor(rs.getString("setor"));
                moradores.setRenda(rs.getString("renda"));
                moradores.setViajens(rs.getString("viajens"));
                moradores.setDigitador(rs.getString("digitador"));
                moradores.setSetorAtividade(rs.getString("atividade"));
                listMoradores.add(moradores);
            }
            return listMoradores;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

    public List<?> read(String idCasa, String numeroPessoa) {
        System.out.println("id Casa " + idCasa);
        System.out.println("numero Pessoa " + numeroPessoa);

        listMoradores = new ArrayList<>();
        String sql = "SELECT * FROM moradores where id_casa= ? and numero_pessoa = ?";
        Moradores moradores;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setString(2, numeroPessoa);
            rs = stmt.executeQuery();
            while (rs.next()) {
                moradores = new Moradores();
                moradores.setId(rs.getInt("id"));
                moradores.setIdCasa(rs.getString("id_casa"));
                moradores.setNumeroPessoa(rs.getString("numero_pessoa"));
                moradores.setNome(rs.getString("nome"));
                moradores.setSituacaoFamiliar(rs.getString("situacao_familiar"));
                moradores.setSexo(rs.getString("sexo"));
                moradores.setIdade(rs.getString("idade"));
                moradores.setGrau(rs.getString("grau"));
                moradores.setSetor(rs.getString("setor"));
                moradores.setRenda(rs.getString("renda"));
                moradores.setViajens(rs.getString("viajens"));
                moradores.setDigitador(rs.getString("digitador"));
                moradores.setSetorAtividade(rs.getString("atividade"));
                listMoradores.add(moradores);
            }

            return listMoradores;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }

    public List<?> read(String idCasa, int id) {

        listMoradores = new ArrayList<>();
        String sql = "SELECT * FROM moradores where id_casa= ? and id = ?";
        Moradores moradores;
        try {
            stmt = con.prepareStatement(sql);
            stmt.setString(1, idCasa);
            stmt.setInt(2, id);
            rs = stmt.executeQuery();
            while (rs.next()) {
                moradores = new Moradores();
                moradores.setId(rs.getInt("id"));
                moradores.setIdCasa(rs.getString("id_casa"));
                moradores.setNumeroPessoa(rs.getString("numero_pessoa"));
                moradores.setNome(rs.getString("nome"));
                moradores.setSituacaoFamiliar(rs.getString("situacao_familiar"));
                moradores.setSexo(rs.getString("sexo"));
                moradores.setIdade(rs.getString("idade"));
                moradores.setGrau(rs.getString("grau"));
                moradores.setSetor(rs.getString("setor"));
                moradores.setRenda(rs.getString("renda"));
                moradores.setViajens(rs.getString("viajens"));
                moradores.setDigitador(rs.getString("digitador"));
                moradores.setSetorAtividade(rs.getString("atividade"));
                listMoradores.add(moradores);
            }
            System.out.println("Lista Moradores  " + listMoradores.size());
            return listMoradores;
        } catch (SQLException ex) {
            Logger.getLogger(DaoMoradores.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } finally {
            NewConectaBanco.closeConneciton(con, stmt, rs);
        }

    }
}
