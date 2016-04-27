<%-- 
    Document   : showSentence
    Created on : Mar 3, 2016, 1:19:22 PM
    Author     : XFP3
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>    
<html>
    <head>
        <meta charset="utf-8">
        <script src="/SentenceWEB/js/sentenceApplication.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <title>Word Counter</title>
    </head> 
    <body onload="App.initialize();">
        <h2>Count words in a sentence and return the results</h2>
        <form name="sentenceForm" action="sentenceSort.html" method="POST">
            <input type="hidden" name="nextPage" value="showResults"/>
            <div id="sentenceFormLayout">
                <div id="description">Enter New Sentence and select sort type : 
                    <input type="radio" name="sortType" id="KEY" value="KEY" checked>Key 
                    <input type="radio" name="sortType" id="VALUE" value="VALUE">Value
                </div>
                <div id="sentenceBox"><input type="text" name="sentence" id="sentence" style="width:1000px;"/></div>
                <div id="submitButton"><input type="submit" value="Submit"/></div>
                <div id="messageDisplay"></div>
            </div>
        </form>

    </body>
</html>


<!-- 

<html xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="utf-8">
        <script src="/SentenceWEB/js/sentenceApplication.js"></script>
        <title>Word Counter</title>
    </head> 
    <body onload="App.initialize();">
        <h2>Count words in a sentence and return the results</h2>
        <form name="sentenceForm" action="/SentenceWEB/sentenceSort.html" method="POST" th:action="@{/SentenceWEB/sentenceSort.html}" th:object="${ShowSentenceModel}">
            <input type="hidden" th:field="*{appPage}" value="showSentence"/>
            <div name="sentenceFormLayout">
                <div id="description">Enter New Sentence and select sort type : 
                    <input type="radio" th:field="*{sortType}" value="KEY" checked>Key 
                    <input type="radio" th:field="*{sortType}" value="VALUE">Value
                </div>
                <div id="sentenceBox"><input type="text" th:field="*{sentence}" style="width:1000px;"/></div>
                <div id="submitButton"><input type="submit" value="Submit"/></div>
                <div id="messageDisplay"></div>
            </div>
        </form>

    </body>
</html>



-->