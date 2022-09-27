package controller;

import java.util.ArrayList;
import java.util.List;

import service.Dto;

public class Controller {

	List<Dto> dto = new ArrayList<Dto>();

	public List<Dto> select() {
		System.out.println("��ü �����Դϴ�.(select)");
		return dto;
	}

	public List<Dto> insert(String name, String age, String phone) {
		dto.add(new Dto(name, age, phone));
		System.out.println("�ش� ������ �߰� �Ǿ����ϴ�.(insert)");
		return dto;
	}
	
	public List<Dto> update(String name, String age, String phone) {
		for(int i=0;i<dto.size();i++) {
			if(dto.get(i).getName().equals(name)) {
				System.out.println(" ������ ������Ʈ�߽��ϴ�.(update)");
				dto.get(i).setName(name);
				dto.get(i).setAge(age);
				dto.get(i).setPhone(phone);
				return dto;
			}
		}
		System.out.println("��ġ�ϴ� �̸��� �����ϴ�.(update)");
		return dto;
	}
	
	public List<Dto> delete(String name) {
		for(int i=0;i<dto.size();i++) {
			if(dto.get(i).getName().equals(name)) {
				System.out.println(name+"�� ������ ���������ϴ�.(delete)");
				dto.remove(i);
				return dto;
			}
		}
		System.out.println("��ġ�ϴ� �̸��� �����ϴ�.(delete)");
		return dto;
	}
}
