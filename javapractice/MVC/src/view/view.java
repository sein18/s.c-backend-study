package view;

import java.util.Scanner;

import controller.Controller;

public class view {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Controller cont = new Controller();

		int num = 0;
		 while (num != 5) {
			System.out.println("�ȳ��ϼ���? ���������� ����ϴ� ������ ������Ʈ�Դϴ�.");
			System.out.println("1. ��ü ���� ���");
			System.out.println("2. ���� �߰��ϱ�");
			System.out.println("3. ���� ������Ʈ");
			System.out.println("4. ���� �����ϱ�");
			System.out.println("5. ����");
			
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
				System.out.println("������ �̸��� �Է��Ͻÿ�.");
				String name = sc.nextLine();
				cont.delete(name);
			} else {
				System.out.println("�߸��� �����Դϴ�.�ٽ� Ȯ�����ּ���.");
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