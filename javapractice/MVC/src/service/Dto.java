package service;

public class Dto {
	
	private String name;
	private String age;
	private String phone;

	public Dto() {
		super();
	}
	public Dto(String name, String age, String phone) {
		super();
		this.name = name;
		this.age = age;
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "Dto [name=" + name + ", age=" + age + ", phone=" + phone + "]";
	}
	
	
}
