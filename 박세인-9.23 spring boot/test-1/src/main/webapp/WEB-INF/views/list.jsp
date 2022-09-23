<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script> 
//console.log(${list});
</script>
</head>
<body>

	<form action="listget" method="get">
	<label>이름</label>
		<input type="text" name="name"><br>
	<label>나이</label>
		<input type="text" name="num"><br>
	<label>전화번호</label>
		<input type="text" name="number"><br>
		<input type="submit">
	</form>
	<table border="1">
		<c:forEach var="dto" items="${list}">
				<tr>
					<td>
						${dto.name}
					</td>
					<td>
						${dto.num}
					</td>
					<td>
						${dto.number}
					</td>
				</tr>		
		</c:forEach>
	</table>
</body>
</html>