
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/pintuer.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/admin.css">
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/js/pintuer.js"></script>
</head>
<body>
<div class="panel admin-panel">
    <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>修改甜品</strong></div>
    <div class="body-content">
        <form method="post" class="form-x" action="${pageContext.request.contextPath}/snack/update" enctype="multipart/form-data">
            <input type="hidden" name="sid" value="${snack.sid}">
            <div class="form-group">
                <div class="label">
                    <label>标题：</label>
                </div>
                <div class="field">
                    <%--隐藏--%>
                    <input type="text" class="input w50" value="${snack.title}" name="title" data-validate="required:请输入标题" />
                    <div class="tips"></div>
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>图片：</label>
                </div>
                <div class="field">
                    <c:if test="${not empty snack.imgPath}" var="img">
                        <img src="${pageContext.request.contextPath}/upload/${snack.imgPath}" alt="" width="100" height="70">
                    </c:if>
                    <input type="file" name="file" class="button bg-blue margin-left" value="${snack.imgPath}" id="image1"  style="float:left;">
                    <div class="tipss">图片尺寸：500*500</div>
                </div>
            </div>


            <div class="form-group">
                <div class="label">
                    <label>描述：</label>
                </div>
                <div class="field">
                    <textarea class="input" name="disc"  style=" height:90px;">${snack.disc}</textarea>
                    <div class="tips"></div>
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>折前价格：</label>
                </div>
                <div class="field">
                    <input type="text" class="input" name="beforePrice" value="${snack.beforePrice}" />
                    <div class="tips"></div>
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>折后价格：</label>
                </div>
                <div class="field">
                    <input type="text" class="input" name="afterPrice" value="${snack.afterPrice}" />
                    <div class="tips"></div>
                </div>
            </div>

            <div class="clear"></div>
            <div class="form-group">
                <div class="label">
                    <label>联系电话：</label>
                </div>
                <div class="field">
                    <input type="text" class="input" name="tel" value="${snack.tel}" />
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>联系地址：</label>
                </div>
                <div class="field">
                    <input type="text" class="input" name="address" value="${snack.address}"/>
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>商品详情：</label>
                </div>
                <div class="field">
                    <textarea type="text" class="input" name="detail" style="height:80px;">${snack.detail}</textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="label">
                    <label>售出数量：</label>
                </div>
                <div class="field">
                    <input type="text" class="input w50" name="saleNum" value="${snack.saleNum}"  data-validate="number:排序必须为数字" />
                    <div class="tips"></div>
                </div>
            </div>

            <div class="form-group">
                <div class="label">
                    <label></label>
                </div>
                <div class="field">
                    <button class="button bg-main icon-check-square-o" type="submit"> 提交</button>
                </div>
            </div>
        </form>
    </div>
</div>

</body></html>