<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/pintuer.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/admin.css">
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/js/pintuer.js"></script>
</head>
<body>

<form method="post" action="" id="listform">
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 内容列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
        <div class="padding border-bottom">
            <ul class="search" style="padding-left:10px;">
                <li>
                    <input type="text" value="${param.content}" id="seach" placeholder="请输入搜索用户名关键字" name="content" class="input" style="width:250px; line-height:17px;display:inline-block" />
                    <a href="javascript:void(0)" class="button border-main icon-search" onclick="changesearch()" > 搜索</a></li>
            </ul>
        </div>
        <table class="table table-hover text-center">
            <tr>
                <th width="100" style="text-align:left; padding-left:20px;">编号</th>
                <th width="10%">排名</th>
                <th>名字</th>
                <th>邮箱</th>
                <th>电话号</th>
                <th width="10%">地址</th>
                <th width="310">操作</th>
            </tr>
            <volist name="list" id="vo">
                <c:forEach var="obj" items="${pages.list}" varStatus="v">
                <tr>

                    <td style="text-align:left; padding-left:20px;">
                            ${obj.uid}
                    </td>
                    <td>
                        <input type="text" name="sort[1]" value="${v.count}" style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" />
                    </td>
                    <td>${obj.uname}</td>
                    <td>${obj.email}</td>
                    <td>${obj.tel}</td>
                    <td>${obj.address}</td>

                    <td><div class="button-group">
                        <a class="button border-red" href="javascript:void(0)" onclick="return del(${obj.uid})">
                            <span class="icon-trash-o"></span> 删除</a> </div></td>
                </tr>
                </c:forEach>

                <tr>
                    <td colspan="8">
                        第${pages.curPageNo}页/共${pages.totalPage}页
                        <div class="pagelist">
                            <a href="#" onclick="onFirst()">首页</a>
                            <c:if test="${pages.curPageNo > 1}">
                                <a href="#" onclick="goLast()">上一页</a>
                            </c:if>
                            <c:choose>
                                <%--总页数小于10页时--%>
                                <c:when test="${pages.totalPage <= 10}">
                                    <c:set var="begin" value="1"/>
                                    <c:set var="end" value="${pages.totalPage}"/>
                                </c:when>
                                <c:otherwise>
                                    <%--总页数大于10页时--%>
                                    <c:set var="begin" value="${pages.curPageNo - 5}"/>
                                    <c:set var="end" value="${pages.curPageNo + 4}"/>
                                    <%--头溢出--%>
                                    <c:if test="${begin < 1}">
                                        <c:set var="begin" value="1"/>
                                        <c:set var="end" value="10"/>
                                    </c:if>
                                    <%--尾溢出--%>
                                    <c:if test="${end > pages.totalPage}">
                                        <c:set var="begin" value="${pages.curPageNo - 9}"/>
                                        <c:set var="end" value="${pages.totalPage}"/>
                                    </c:if>
                                </c:otherwise>
                            </c:choose>
                            <%--遍历--%>
                            <c:forEach var="i" begin="${begin}" end="${end}">
                                <c:if test="${i eq pages.curPageNo}" var="cur">
                                    <span class="current">${i}</span>
                                </c:if>
                                <c:if test="${!cur}">
                                    <a href="#" onclick="jump(${i})">${i}</a>
                                </c:if>
                            </c:forEach>
                            <c:if test="${pages.curPageNo < pages.totalPage}">
                                <a href="#" onclick="goNext()">下一页</a>
                            </c:if>
                            <a href="#" onclick="onLast()">尾页</a>
                        </div>
                    </td>
                </tr>
        </table>
    </div>
</form>
<script type="text/javascript">


    //跳转
    function jump(num){
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage="+num);
        $("#listform").submit();
    }

    //首页
    function onFirst(){
        var curPage = "${pages.curPageNo}";
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage=1");
        $("#listform").submit();
    }

    //尾页
    function onLast(){
        var maxPage = "${pages.totalPage}";
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage="+maxPage);
        $("#listform").submit();
    }

    //上一页
    function goLast(){
        var curPage = "${pages.curPageNo}";
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage="+(parseInt(curPage)-1));
        $("#listform").submit();
    }

    //下一页
    function goNext(){
        var curPage = "${pages.curPageNo}";
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage="+(parseInt(curPage)+1));
        $("#listform").submit();
    }
    //搜索
    function changesearch(){
        $("#listform").attr("action","${pageContext.request.contextPath}/user/backList1?curPage=1");
        $("#listform").submit();
    }

    //单个删除
    function del(uid){
        var curPage = "${pages.curPageNo}";
        if(confirm("您确定要删除吗?")){
            alert("删除成功！！");
            window.location =  "${pageContext.request.contextPath}/user/delete1?uid="+uid+"&curPage="+curPage;

        }else{
            alert("取消删除操作！！");
            return false;
        }
    }



</script>
</body>
</html>