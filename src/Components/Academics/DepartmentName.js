import React, { Component } from 'react'
import './DepartmentName.css'
import Plus from './Assets/plus.svg'
import Minus from './Assets/minus.svg'
import AcadPageCarousel from './AcadPageCarousel/AcadPageCarousel'

export const departmentinfo = [
    {
      name: "Architechture and Planning ",
      info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
      info2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
      degree: "Degree Offered: B.Tech, M.Tech, Phd",
      bcstats: "Branch Change stats B.Tech only: 3     5" ,
    },
    {
        name: "Biosciences and Bioengineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Chemical Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Chemistry ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Civil Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Computer Science and Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Design ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Earthquake Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Earth Sciences ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Electrical Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Electronics and communication engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Humanities and Social sciences ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Hydrogen ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Hydro and Renewable energy ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Management studies ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Mathematics ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Mechanics and Industrial Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Metallurgical and Materials Engineering ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Paper Technology ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "Physics ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      {
        name: "WaterResource Department and Management ",
        info1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet quis eget nulla neque, tortor.",
        info2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.",
        degree: "Degree Offered: B.Tech, M.Tech, Phd",
        bcstats: "Branch Change stats B.Tech only: 3     5" ,
      },
      
    
  ];


// export class DepartmentName extends Component {
//     render() {
//         return (
//             <div id='departmentinfo'>
//                 <h1 id='departmentname'>Department Name</h1>
//                 <AcadPageCarousel />
//                 <div id='para1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                 Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. 
//                 Nibh sit bibendum eget blandit bibendum. Vulputate adipiscing viverra sed 
//                 egestas eu aliquet mauris. A morbi nisi, nunc, et phasellus. Phasellus ornare 
//                 sed dolor diam, dignissim pharetra amet, aliquam. Suspendisse sit massa in bibendum 
//                 in diam mi massa ut. Diam sapien adipiscing viverra condimentum fringilla tincidunt a 
//                 pharetra interdum. Pretium arcu vitae, vitae tempor, lectus. Leo et malesuada lectus 
//                 senectus. Quam viverra aenean gravida nec facilisis amet, pretium lacus, sem. Amet laoreet
//                  quis eget nulla neque, tortor.</div>

//                  <div id='para2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                  Congue duis semper tempor sit. Dictum est cras lorem posuere euismod. 
//                  Nibh sit bibendum eget blandit bibendum. [RESEARCH RELATED DATA]Vulputate adipiscing viverra sed egestas eu aliquet mauris. 
//                  A morbi nisi, nunc, et phasellus. 
//                  Phasellus ornare sed dolor diam, dignissim pharetra amet, aliquam.</div>

//                  <h3>Degrees Offered: B.Tech, M.Tech, Phd</h3>
//                  <h3>Branch Change Stats B.Tech. only: 3 <img src={Plus} /> 5 <img src={Minus} /> </h3>

//                  <button id='placement'>Placement Statistics</button>
                 
//             </div>
//         )
//     }
// }

// export default DepartmentName
