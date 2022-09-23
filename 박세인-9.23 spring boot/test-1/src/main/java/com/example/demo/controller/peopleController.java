package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.dto.peopleDto;


@Controller
public class peopleController {
	
	
	List<peopleDto> Ldto = new ArrayList<peopleDto>();
	
	
	@RequestMapping("/")
	public String root() {	
		return "index";
	}
	
	@RequestMapping("list")
	public String list(Model model) {
		
		model.addAttribute("list", Ldto);
		System.out.println("확인");
		return "list";
	}

	@GetMapping("listget")
	public String listget(Model model, peopleDto Dto) {
		Ldto.add(Dto);
		System.out.println(Ldto);
		return "redirect:/list";
	}
}
