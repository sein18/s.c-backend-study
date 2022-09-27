package controller;

import java.util.ArrayList;
import java.util.List;

import service.Dto;

public class Controller {

	List<Dto> dto = new ArrayList<Dto>();

	public List<Dto> select() {
		System.out.println("전체 선택입니다.(select)");
		return dto;
	}

	public List<Dto> insert(String name, String age, String phone) {
		dto.add(new Dto(name, age, phone));
		System.out.println("해당 정보가 추가 되었습니다.(insert)");
		return dto;
	}
	
	public List<Dto> update(String name, String age, String phone) {
		for(int i=0;i<dto.size();i++) {
			if(dto.get(i).getName().equals(name)) {
				System.out.println(" 정보를 업데이트했습니다.(update)");
				dto.get(i).setName(name);
				dto.get(i).setAge(age);
				dto.get(i).setPhone(phone);
				return dto;
			}
		}
		System.out.println("일치하는 이름이 없습니다.(update)");
		return dto;
	}
	
	public List<Dto> delete(String name) {
		for(int i=0;i<dto.size();i++) {
			if(dto.get(i).getName().equals(name)) {
				System.out.println(name+"의 정보가 지워졌습니다.(delete)");
				dto.remove(i);
				return dto;
			}
		}
		System.out.println("일치하는 이름이 없습니다.(delete)");
		return dto;
	}
}
