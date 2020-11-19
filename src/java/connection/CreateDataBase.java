package connection;

import Util.GravarLog;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;

public class CreateDataBase {

    private Connection con;
    private PreparedStatement stmt = null;
    private ArrayList<String> sqlList = new ArrayList<>();

    public CreateDataBase() throws IOException {
   con = NewConectaBanco.getConnection();
   createCasa();
   createMoradores();
   criandoTableViajens();
   atualizarBanco();
    }

    private void criandoTableViajens() {
   String sql = "CREATE TABLE IF NOT EXISTS viajens("
      + "id SERIAL PRIMARY KEY, "
      + "id_casa TEXT NOT NULL, "
      + "numero_pessoa TEXT, "
      + "viajen_residencia TEXT, "
      + "local TEXT, "
      + "hora TEXT, "
      + "destino TEXT,"
      + "zona TEXT, "
      + "mot TEXT, "
      + "mod TEXT, "
      + "mod1 TEXT, "
      + "mod2 TEXT, "
      + "cont TEXT, "
      + "digitador TEXT, "
      + "FOREIGN KEY(id_casa) REFERENCES casa(id)"
      + "); ";
   sqlList.add(sql);
    }

    private void createMoradores() {
   String sql = "CREATE TABLE IF NOT EXISTS moradores(id SERIAL PRIMARY KEY, "
      + "id_casa TEXT NOT NULL, "
      + "numero_pessoa TEXT, "
      + "nome TEXT, "
      + "situacao_familiar TEXT, "
      + "sexo TEXT, "
      + "idade TEXT, "
      + "grau TEXT, "
      + "setor TEXT, "
      + "renda TEXT, "
      + "viajens TEXT, "
      + "situacao TEXT, "
      +"digitador TEXT, "
      + "FOREIGN KEY(id_casa) REFERENCES casa(id)"
      + "); ";
   sqlList.add(sql);
    }

    private void createCasa() {

   String sql = "CREATE TABLE IF NOT EXISTS casa(id TEXT PRIMARY KEY, "
      + "latitude TEXT, "
      + "longitude TEXT, "
      + "zona TEXT, "
      + "folha TEXT, "
      + "digitador TEXT, "
      + "pontos TEXT ); ";
   sqlList.add(sql);
    }

    private void atualizarBanco() throws IOException {
   try {
  for (int i = 0; i < sqlList.size(); i++) {
      stmt = con.prepareStatement(sqlList.get(i));
      System.out.println("opa");
      GravarLog.gravarLog(sqlList.get(i).toString());
      stmt.executeUpdate();
  }
   } catch (Exception e) {
  e.printStackTrace();
  GravarLog.gravarLog(e.getMessage());
   } finally {
  NewConectaBanco.closeConneciton(con, stmt);
   }
    }
}
/*
create table renda (
    id serial primary key, 
    macrozona text not null,
    zona text not null, 
    populaibge text not null,
    numdomicilio text not null,
    habitantedomicilio text not null,
    populatotal text not null,
    meiosalario text not null,
    meio_a_um text not null,
    um_a_dois text not null,
    dois_a_tres text not null,
    tres_a_cinco text not null,
    cinco_a_dez text not null,
    dez_a_quinze text not null,
    quinze_a_vinte text not null,
    semredimento text not null,
    com_ou_semredimento text not null,
    menores_dezanos text not null,
    censitarios text not null
);




create table formopniao (
    id serial primary key,
    numformulario text not null,
    data text,
    hora text,
    horaviagem text,
    linha text,
    um text,
    dois text,
    tres text,
    quatro text,
    cinco text,
    sete text,
    oito text,
    nove text,
    dez text,
    onze text,
    doze text,
    treze text,
    quatorze text,
    quinze text,
    dezesseis text,
    dezessete text,
    dezoito text,
    dezenove text,
    vinte text,
    vinteeum text 
);


*/