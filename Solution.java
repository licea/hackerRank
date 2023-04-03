import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    private static int B;
    private static int H;
    private static boolean flag = true;

    static {
        Scanner scan = new Scanner(System.in);
        B = scan.nextInt();
        H = scan.nextInt();
        scan.close();
        try {
            negativeException(B, H);
        } catch (Exception e) {
            System.out.println(e);
            flag = false;
        }
    }

    static void negativeException(int B, int H) throws Exception {
        if (B<=0 || H<=0) {
            throw new Exception("Breadth and height must be positive");
        }
    }
    

public static void main(String[] args){
		if(flag){
			int area=B*H;
			System.out.print(area);
		}
		
	}//end of main

}//end of class
