
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>小仙女甜品店后台管理中心</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/pintuer.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/admin.css">
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
</head>
<body style="background-color:#f2f9fd;">
<div class="header bg-main">
    <div class="logo margin-big-left fadein-top">
        <h1><img src="${pageContext.request.contextPath}/upload/y.jpg" class="radius-circle rotate-hover" height="50" alt="" />小仙女甜品店后台管理中心</h1>
    </div>
    <div style="float:right; margin-top:17px; margin-right:40px;text-shadow: 5px 5px 5px #00aaee;font-weight:bold">
           <h3>欢迎管理员：${account.backName}</h3>
    </div>
    <div class="head-l"><a class="button button-little bg-green" href="" target="_blank"><span class="icon-home"></span> 前台首页</a>
        &nbsp;&nbsp;
        &nbsp;&nbsp;<a class="button button-little bg-red" href="${pageContext.request.contextPath}/account/toLogin"><span class="icon-power-off"></span> 退出登录</a> </div>
</div>
<div class="leftnav">
    <div class="leftnav-title"><strong><span class="icon-list"></span>菜单列表</strong></div>
    <h2><span class="icon-user"></span>基本设置</h2>
    <ul style="display:block">
        <li><a href="info.html" target="right"><span class="icon-caret-right"></span>网站设置</a></li>
        <li><a href="pass.html" target="right"><span class="icon-caret-right"></span>修改密码</a></li>
        <li><a href="${pageContext.request.contextPath}/user/backList1" target="right"><span class="icon-caret-right"></span>客户管理</a></li>
        <li><a href="book.html" target="right"><span class="icon-caret-right"></span>留言管理</a></li>
    </ul>
    <h2><span class="icon-pencil-square-o"></span>产品管理</h2>
    <ul>
        <%--<li><a href="${pageContext.request.contextPath}/snack/backList" target="right"><span class="icon-caret-right"></span>甜品管理</a></li>--%>
        <li><a href="${pageContext.request.contextPath}/snack/backList" target="right"><span class="icon-caret-right"></span>零食糕点管理</a></li>
    </ul>
</div>
<script type="text/javascript">
    $(function(){
        $(".leftnav h2").click(function(){
            $(this).next().slideToggle(200);
            $(this).toggleClass("on");
        })
        $(".leftnav ul li a").click(function(){
            $("#a_leader_txt").text($(this).text());
            $(".leftnav ul li a").removeClass("on");
            $(this).addClass("on");
        })
    });
</script>
<ul class="bread">
    <li><a href="{:U('Index/info')}" target="right" class="icon-home"> 首页</a></li>
    <li><a href="##" id="a_leader_txt">网站信息</a></li>
    <li><b>当前语言：</b><span style="color:red;">中文</php></span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;切换语言：<a href="##">中文</a> &nbsp;&nbsp;<a href="##">英文</a> </li>
</ul>
<div class="admin">
    <iframe scrolling="auto" rameborder="0" src="${pageContext.request.contextPath}/account/main" name="right" width="100%" height="100%"></iframe>




</div>
<div style="text-align:center;">
    <p>来源:<a href="http://www.mycodes.net/" target="_blank">源码之家</a></p>
</div>
</body>
</html>