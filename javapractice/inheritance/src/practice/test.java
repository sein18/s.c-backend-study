package practice;

public class test implements intertest{

	public static void main(String[] args) {

		point p = new point3D(1,2,3);
		
		test z = new test();
	 
		
		System.out.println(p);
		z.abc();
		System.out.println(z.a);
		
		
	}

	 

	@Override
	public void abc() {
		System.out.println("인터페이스 연습");
	}

}

interface intertest{
	int a = 1;
	
	public void abc();
	
}

abstract class abstest{
	int x = 1;
	public abstract void a1();
	
	public void a2() {
		int x1 = 2;
	}
}

class Parent{
	int age;
}
class child extends Parent{
	
}
class point{
	int x;
	int y;
	public point() {
		super();
	}
	public point(int x, int y) {
		super();
		this.x = x;
		this.y = y;
	}
	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	@Override
	public String toString() {
		return "point [x=" + x + ", y=" + y + "]";
	}
	
}

class point3D extends point{
	int z;

	public point3D() {
		super();
	}
	 
	public point3D(int x, int y, int z) {
		super(x, y);
		this.z = z;
	}

	public int getZ() {
		return z;
	}

	public void setZ(int z) {
		this.z = z;
	}
}











