<%--
  Created by IntelliJ IDEA.
  User: jaebin2
  Date: 2020-07-09
  Time: 오후 12:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>sum_1_10</title>
</head>
<body>

<%
    int total =0;
    for(int i=1;i<=10;i++){
        total =total+i;
    }
%>

1부터 10까지의 합 : <%= total %>
</body>
</html>
