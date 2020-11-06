package model;

public class Casa {
    private String id;
    private String latitude;
    private String longitude;
    private String zona;
    private String folha;
    private String pontos;
    private String digitador;

    public String getDigitador() {
   return digitador;
    }

    public void setDigitador(String digitador) {
   this.digitador = digitador;
    }
    
    
    
    
    public String getId() {
   return id;
    }

    public void setId(String id) {
   this.id = id;
    }

    public String getLatitude() {
   return latitude;
    }

    public void setLatitude(String latitude) {
   this.latitude = latitude;
    }

    public String getLongitude() {
   return longitude;
    }

    public void setLongitude(String longitude) {
   this.longitude = longitude;
    }

    public String getZona() {
   return zona;
    }

    public void setZona(String zona) {
   this.zona = zona;
    }

    public String getFolha() {
   return folha;
    }

    public void setFolha(String folha) {
   this.folha = folha;
    }

    public String getPontos() {
   return pontos;
    }

    public void setPontos(String pontos) {
   this.pontos = pontos;
    }

    @Override
    public String toString() {
   return "Casa{" + "id=" + id + ", latitude=" + latitude + ", longitude=" + longitude + ", zona=" + zona + ", folha=" + folha + ", pontos=" + pontos + ", digitador=" + digitador + '}';
    }

    
    
    
}
