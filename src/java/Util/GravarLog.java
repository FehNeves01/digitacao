/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Util;


import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 *
 * @author Win7
 */
public class GravarLog {

    //-------------
    public static void gravarLog(String cordao) throws IOException {
   //----

   SimpleDateFormat ddmmaaaa = new SimpleDateFormat("dd/MM/yyyy - HH:mm");
   SimpleDateFormat ddmmaaaalog = new SimpleDateFormat("ddMMyyyy");
   Calendar todayip = Calendar.getInstance();
   String hojeip = ddmmaaaa.format(todayip.getTime());
   String hojeiplog = ddmmaaaalog.format(todayip.getTime());

   String txtseqip = cordao;
   String pastalog = new Propriedades().getLogDir();
   java.io.File arqip = new java.io.File(pastalog, "ibge" + hojeiplog + ".log");
   BufferedWriter bf = new BufferedWriter(new FileWriter(arqip, true));
   bf.write(hojeip + " = " + txtseqip + "\r\n");
   bf.flush();
   bf.close();

    }
    
    public static void gravarTexto(String cordao) throws IOException {
   //----   
   SimpleDateFormat ddmmaaaalog = new SimpleDateFormat("ddMMyyyy");
   Calendar todayip = Calendar.getInstance();  
   String hojeiplog = ddmmaaaalog.format(todayip.getTime());
   
   String pastalog = new Propriedades().getLogDir();
   java.io.File arqip = new java.io.File(pastalog, "ibge" + hojeiplog + ".txt");
   BufferedWriter bf = new BufferedWriter(new FileWriter(arqip, true));
   bf.write(cordao + "\r\n");
   bf.flush();
   bf.close();

    }
    
    public static void gravarTextoExcel(String cordao) throws IOException {
   //----   
   SimpleDateFormat ddmmaaaalog = new SimpleDateFormat("ddMMyyyy");
   Calendar todayip = Calendar.getInstance();  
   String hojeiplog = ddmmaaaalog.format(todayip.getTime());
   
   String pastalog = new Propriedades().getLogDir();
   java.io.File arqip = new java.io.File(pastalog, "ibge" + hojeiplog + ".csv");
   BufferedWriter bf = new BufferedWriter(new FileWriter(arqip, true));
   bf.write(cordao + "\r\n");
   bf.flush();
   bf.close();

    }

}
