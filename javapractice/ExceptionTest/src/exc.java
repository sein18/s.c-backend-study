
public class exc {
	
	public static void main(String[] args) {
		
		int x[] = new int[10];
		try {
			System.out.println(x[10]);
		} catch (Exception e) {
			System.out.println("��������");
		}finally {
			System.out.println("������ ���!");
		}
	}
}