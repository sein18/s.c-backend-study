package com.example.demo.model.dto;

import org.springframework.stereotype.Service;

@Service
public class peopleDto {
	
	private String name;
	private String num;
	private String number;
	
	public peopleDto() {
	}
	
	public peopleDto(String name, String num, String number) {
		this.name = name;
		this.num = num;
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	@Override
	public String toString() {
		return "peopleDto [name=" + name + ", num=" + num + ", number=" + number + "]";
	}
	
	
	 
	 
}
