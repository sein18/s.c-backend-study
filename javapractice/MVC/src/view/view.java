package view;

import java.util.Scanner;

import controller.Controller;

public class view {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Controller cont = new Controller();

		int num = 0;
		 while (num != 5) {
			System.out.println("안녕하세요? 개인정보를 등록하는 간단한 프로젝트입니다.");
			System.out.println("1. 전체 정보 출력");
			System.out.println("2. 정보 추가하기");
			System.out.println("3. 정보 업데이트");
			System.out.println("4. 정보 삭제하기");
			System.out.println("5. 종료");
			
			num = sc.nextInt();
			sc.nextLine();
			
			if (num == 1) {
				System.out.println(cont.select());
			} else if (num == 2) { 
				String name = sc.nextLine();
				String age = sc.nextLine();
				String phone = sc.nextLine();
//				System.out.println(name);
//				System.out.println(age);
//				System.out.println(phone);
				cont.insert(name, age, phone);
				
			} else if (num == 3) {
				String name = sc.nextLine();
				String age = sc.nextLine();
				String phone = sc.nextLine();
				cont.update(name, age, phone);
				
			} else if (num == 4) {
				System.out.println("삭제할 이름을 입력하시오.");
				String name = sc.nextLine();
				cont.delete(name);
			} else {
				System.out.println("잘못된 숫자입니다.다시 확인해주세요.");
			}
			System.out.println();
		}
	sc.close();	
	}

	String test = " CREATE OR REPLACE TRIGGER trg_test "
			+ " AFTER UPDATE ON emp FOR EACH ROW "
			+ " DECLARE BEGIN "
			+ " UPDATE career SET eno = :new.eno where eno = :old.eno; "
			+ " UPDATE eva SET eno = :new.eno where eno = :old.eno;"
			+ " UPDATE certi SET eno = :new.eno where eno = :old.eno; "
			+ "END;/";
		  
}
