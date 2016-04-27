<%-- 
    Document   : showResults
    Created on : Mar 3, 2016, 1:19:38 PM
    Author     : Joseph Richard
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>    

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
                <link rel="stylesheet" type="text/css" href="/SentenceWEB/css/showResults.css"/>
		<script src="/SentenceWEB/js/sentenceApplication.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<title>Word Counter</title>
	</head> 
        <body onload="App.setFieldData()">
            <h2>Count words in a sentence and return the results</h2>
            <div id="showResults" onClick="App.newUrl()">
                <input type="hidden" name="nextPage" value="showSentence"/>
                <div id="sentenceFormLayout">
                    <div id="description">Enter New Sentence and select sort type : 
                        <c:if test="${sortType eq 'KEY'}">
                            <input type="radio" name="sortType" id="KEY" value="KEY" checked>Key 
                            <input type="radio" name="sortType" id="VALUE" value="VALUE">Value
                        </c:if>
                        <c:if test="${sortType eq 'VALUE'}">
                            <input type="radio" name="sortType" id="KEY" value="KEY">Key 
                            <input type="radio" name="sortType" id="VALUE" value="VALUE" checked>Value
                        </c:if>                            
                    </div>
                    <div id="sentenceBox"><input type="text" name="sentence" style="width:1000px;" value="${sentence}"/></div>
                    <div id="submitButton"><input type="button" name="submit" value="Submit"/></div>
                    <div id="messageDisplay"></div>
                </div>
                <div>Click anywhere to reset page.</div>    
                <div id="sortResult">
                    <div style="font-weight:bold; text-decoration: underline;">Results</div>
                    <c:forEach var="sortedMap" items="${sortedMap}">
                        <div><c:out value="${sortedMap}"/></div>				
                    </c:forEach>
                </div>
            </div>
		
	</body>
</html>