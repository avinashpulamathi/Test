$(document).ready(function(){
  var data = {
    pediatricDoc: [
      {
        image:"images/Bitmap Copy.png",
        name:"Dr. Vijay Agarwal",
        qualifications:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        intro:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."
      },
      {
        image:"images/Bitmap Copy.png",
        name:"Dr. Vijay Agarwal",
        qualifications:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        intro:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."
      }
    ],
    adultDoc: [
      {
        image:"images/Bitmap Copy.png",
        name:"Dr. Vijay Agarwal",
        qualifications:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        intro:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."
      },
      {
        image:"images/Bitmap Copy.png",
        name:"Dr. Vijay Agarwal",
        qualifications:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        intro:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."
      }
    ],
    bmtTypes:[
      "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy",
      "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.",
      "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.",
      "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.",
      "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad."
    ],
    immuneWarnings: [
      {
        image: "images/Group 2.png",
        text: "Failure to thrive – not gaining weight and height as per the age norms"
      },
      {
        image: "images/Group.png",
        text: "Infections warranting multiple hospitalizations"
      },
      {
        image: "images/Group (1).png",
        text: "Requirement of intravenous antibiotics to clear infections"
      },
      {
        image: "images/Group (2).png",
        text: "2 or more episodes of pneumonia"
      },
      {
        image: "images/Group (3).png",
        text: "Family history of death of children at young age due to immune deficiency"
      },
      {
        image: "images/Group (4).png",
        text: "Repeated episodes of diarrhea"
      },
      {
        image: "images/Group 2 (1).png",
        text: "2 or more episodes of sinus infections within a year"
      },
      {
        image: "images/Group 2 (2).png",
        text: "2 or more episodes of ear discharge"
      },
      {
        image: "images/Group 2 (3).png",
        text: "Repeated skin infections"
      },
      {
        image: "images/Group (5).png",
        text: "Repeated abscess formation (liver abscess, brain abscess)"
      }
    ],
    faqs: [
      {
        qus:"What are the conditions that requireBone Marrow Transplant?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"Which are the hematological diseases that may benefit from bone marrow transplants?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"Which are the Cancers that may benefit from bone marrow transplants?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"Do bone marrow failure syndromes require BMT?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"What are Primary Immune Deficiency diseases ?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"Which are the immune deficiencies that warrant BMT?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      },
      {
        qus:"What makes transplants at Aster CMI unique?",
        answrs:[
          "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders",
          "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas"
        ]
      }
    ],
    testimonials:[
      {
        image: "images/Bitmap.png",
        name: "John Doe",
        designation: "Software Engineer",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        image: "images/Bitmap.png",
        name: "John Doe",
        designation: "Software Engineer",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        image: "images/Bitmap.png",
        name: "John Doe",
        designation: "Software Engineer",
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      }
    ]
  }

  var pediatricDocSection=$(".doctors_section .col-xl-6.pediatric");
  var adultDocSection=$(".doctors_section .col-xl-6.adult");
  var bmtTypesSection=$(".bmt_types_section .bmt_types_lists");
  var warningsSignSection=$(".warningSigns .warningSigns_section_content");
  var faqsSection=$(".faq_section");
  var testimonialsSection = $(".testimonials_section .testimonials");
  var pediatricDocArr,adultDocArr,bmtTypesArr,immuneWarningsArr,faqsArr,testimonialsArr;
  for(var doc of data.pediatricDoc){
    pediatricDocArr = pediatricDocArr || [];
    pediatricDocArr.push(doctorCard(doc.image,doc.name,doc.qualifications,doc.intro));
  }
  for(var doc of data.adultDoc){
    adultDocArr = adultDocArr || [];
    adultDocArr.push(doctorCard(doc.image,doc.name,doc.qualifications,doc.intro));
  }
  for(var bmtType of data.bmtTypes){
    bmtTypesArr = bmtTypesArr || [];
    bmtTypesArr.push($(document.createElement("li")).addClass("pl-2 pl-lg-4").text(bmtType));
  }
  for(var immuneWarning of data.immuneWarnings){
    immuneWarningsArr = immuneWarningsArr || [];
    immuneWarningsArr.push(immuneDeficiency(immuneWarning.image,immuneWarning.text));
  }
  for(var faq of data.faqs){
    faqsArr = faqsArr || [];
    faqsArr.push(faqs(faq.qus,faq.answrs));
  }
  for(var testimonial of data.testimonials){
    testimonialsArr = testimonialsArr || [];
    testimonialsArr.push(testimonials(testimonial.image,testimonial.name,testimonial.designation,testimonial.review));
  }
  appendChildsToParent(pediatricDocSection,pediatricDocArr);
  appendChildsToParent(adultDocSection,adultDocArr);
  appendChildsToParent(bmtTypesSection,bmtTypesArr);
  appendChildsToParent(warningsSignSection,immuneWarningsArr);
  appendChildsToParent(faqsSection,faqsArr);
  appendChildsToParent(testimonialsSection,testimonialsArr);

  $(".faq_qus_onclick").click(function(evnt){
    var a= $(evnt.target).hasClass("faq_qus_onclick") ?
      $(evnt.target).siblings("ul.faq-qus-ans").slideToggle() :
      $(evnt.target).parent(".faq_qus_onclick").siblings("ul.faq-qus-ans").slideToggle();
  });
});


function doctorCard (img,name,qualifications,intro) {
    var docPic = $(document.createElement("img")).attr("src",img).addClass("mt-4 mb-4");
    var docName = $(document.createElement("div")).addClass("doc_card_name mb-3").text(name);
    var docQualifications = $(document.createElement("div")).addClass("doc_card_spcl").text(qualifications);
    var spclBorder = $(document.createElement("div")).addClass("doc_card_spcl_border mb-1");
    var docIntro = $(document.createElement("div")).addClass("doc_card_intro mb-4").text(intro);
    var knowMoreBtn = $(document.createElement("button")).addClass("doc_card_button mb-5 pr-2").text("Know More");
    var docCard = $(document.createElement("div")).addClass("col-12 doc_card px-5");
    return appendChildsToParent(docCard,[docPic,docName,docQualifications,spclBorder,docIntro,knowMoreBtn]);
}
function immuneDeficiency (img,warning){
    var immuneDiv = $(document.createElement("div")).addClass("col-12 col-md-6 col-lg-3 mb-5 mt-3");
    var immuneImg = $(document.createElement("img")).attr("src",img).addClass("warningSigns_section_img mb-3 mb-lg-4");
    var immuneTxt = $(document.createElement("div")).text(warning);
    return appendChildsToParent(immuneDiv,[immuneImg,immuneTxt]);
}
function faqs(qus,answrs){
    var qusEl = $(document.createElement("div")).addClass("faq_qus d-sm-inline-block").text(qus);
    var imgEl = $(document.createElement("img")).attr("src","images/Path Copy 5.png").addClass("dropdown_img");
    var visibleFaqSectionContainer = $(document.createElement("div")).addClass("faq_qus_onclick mb-4");
    var visibleFaqSection = appendChildsToParent(visibleFaqSectionContainer,[qusEl,imgEl]);
    var answrsElArr;
    for(var i=0; i<answrs.length;i++){
        answrsElArr = answrsElArr || [];
        answrsElArr.push($(document.createElement("li")).addClass("pl-2 pl-lg-4").text(answrs[i]));
    }
    var hiddenAnswrSectionUl = $(document.createElement("ul")).addClass("faq-qus-ans pr-5");
    var hiddenAnswrSection = appendChildsToParent(hiddenAnswrSectionUl,answrsElArr);
    var faqBlock = $(document.createElement("div")).addClass("faq_qus_block mb-5");
    return appendChildsToParent(faqBlock,[visibleFaqSection,hiddenAnswrSection]);
}
function testimonials(img,name,designation,review){
    var name = $(document.createElement("div")).addClass("name").text(name);
    var designation = $(document.createElement("div")).addClass("designation").text(designation);
    var detailsSection = $(document.createElement("div")).addClass("details d-inline-block");
    var detailsSectionBlock = appendChildsToParent(detailsSection,[name,designation]);
    var img = $(document.createElement("img")).attr("src",img).addClass("d-inline-block");
    var namePicSection = $(document.createElement("div")).addClass("name_pic mb-4");
    var namePicSectionBlock = appendChildsToParent(namePicSection,[img,detailsSectionBlock]);
    var review = $(document.createElement("div")).addClass("review pr-5").text(review);
    var testimonialsSection = $(document.createElement("div")).addClass("testimonial mb-5 mr-5 text-center text-lg-left d-lg-inline-block");
    return appendChildsToParent(testimonialsSection,[namePicSectionBlock,review]);
}
function appendChildsToParent (parentEl,childElArr) {
    for(var i=0; i<childElArr.length;i++){
        parentEl.append(childElArr[i]);
    }
    return parentEl;
}
