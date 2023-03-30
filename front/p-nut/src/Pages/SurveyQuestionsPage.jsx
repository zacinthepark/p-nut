import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { symptomsQuestionAPI } from "../api/symptomsQuestionAPI";

const SurveyQuestionsPage = () => {
  const { question1, question2, question3 } = useParams();
  const token = useSelector((state) => state.auth.authentication.token);

  const questionObj = useMemo(() => {
    const [questionId1, question1Thema] = question1.split("=");
    const [questionId2, question2Thema] = question2.split("=");
    const [questionId3, question3Thema] = question3.split("=");
    return {
      questionId1,
      questionId2,
      questionId3,
      questionThema: [question1Thema, question2Thema, question3Thema],
    };
  }, [question1, question2, question3]);

  const [question1Data, setQuestion1Data] = useState();
  const [question2Data, setQuestion2Data] = useState();
  const [question3Data, setQuestion3Data] = useState();

  useEffect(() => {
    symptomsQuestionAPI(
      token,
      Number(questionObj.questionId1) + 1,
      Number(questionObj.questionId2) + 1,
      Number(questionObj.questionId3) + 1
    ).then((res) => {
      const [question1Data, question2Data, question3Data] = res;
      setQuestion1Data(question1Data.slice(1));
      setQuestion2Data(question2Data.slice(1));
      setQuestion3Data(question3Data.slice(1));
    });
  }, [questionObj, token]);

  console.log(question1Data);
  console.log(question2Data);
  console.log(question3Data);

  return (
    <div>
      {question1Data &&
        question1Data.map((value) => <div key={value}>{value}</div>)}
      {question2Data &&
        question2Data.map((value) => <div key={value}>{value}</div>)}
      {question3Data &&
        question3Data.map((value) => <div key={value}>{value}</div>)}
    </div>
  );
};

export default SurveyQuestionsPage;
