var q = {
  innovation: {
    start: {
      title: 'Innovation',
      text: 'Do you know and understand the key concepts within the Dell Technologies Code of Conduct?  Let’s check your Code IQ!'
    },

    end:{
      text: 'Thank you for completing the IQ Challenge. Links to specific internal policies related to the Innovation section can be found below.',
      links:[
          {
            text: "Cybersecurity S.A.F.E. site",
            url: "https://cybersecurity.one.dell.com/default.aspx"
          },
          {
            text: "Global Social Media Policy",
            url: "http://www.dell.com/learn/us/en/uscorp1/corp-comm/social-media-policy?c=us&l=en&s=corp"
          },
          {
            text: "Corporate Responsiblity Report",
            url: "https://dell.yourcause.com/home#/engagement/3504c085-46b1-4edc-bfe9-e7d2b68d8eef"
          }
        ]
    },

    quizzes: [

      {
        type: 'sentence_connector',
        class: 'sentence-connector',
        text: "Select the end of the sentence that best completes Dell's position on protecting confidential information.",
        responseRequiredAll: true,
        questions: [
          {
            text: 'If I leave my job at Dell Technologies,',
            answers: [
              {
                id: 1,
                text: ' ...I cannot download or copy business documents created here, including Dell confidential information.'
              },
              {
                id: 2,
                text: ' ...I should take as many office supplies as possible.'
              },
              {
                id: 3,
                text: ' ...I should still wear Dell t-shirts to advertise our awesome products.'
              }
            ],
            response: 0
          }
        ],

        message:"Misusing or disclosing our own proprietary information (or a trade secret) is prohibited.  We should never unlawfully acquire or misuse trade secrets or other confidential or proprietary information of any third party.  Consult the We Safeguard Confidential Information sections of the Code to find out more."
      },


      {
        type: 'sentence_connector',
        class: 'sentence-connector',
        text: "Select the end of the sentence that best completes Dell's policy on competitive information.",
        responseRequiredAll: true,
        questions: [
          {
            text: 'Proprietary, confidential information from a competitor',
            answers: [
              {
                id: 1,
                text: ' ...means we can never say their name.'
              },
              {
                id: 2,
                text: ' ...cannot be shared within Dell, regardless how it was given to us.'
              },
              {
                id: 3,
                text: ' ...should be made into party confetti.'
              }
            ],
            response: 1
          }
        ],

        message:"Misusing or disclosing our own proprietary information (or a trade secret) is prohibited.  We should never unlawfully acquire or misuse trade secrets or other confidential or proprietary information of any third party.  Consult the We Safeguard Confidential Information sections of the Code to find out more."
      },


      {
        type: 'sentence_connector',
        class: 'sentence-connector',
        text: "Select the end of the sentence that best completes Dell's position on how to evaluate sharing confidential information.",
        responseRequiredAll: true,
        questions: [
          {
            text: 'Before sharing information with others inside Dell,',
            answers: [
              {
                id: 1,
                text: ' ...make sure they know the secret handshake.'
              },
              {
                id: 2,
                text: ' ...buy a really nice megaphone.'
              },
              {
                id: 3,
                text: ' ...be sure they have both a right and need to know that information.'
              }
            ],
            response: 2
          }
        ],

        message:"Misusing or disclosing our own proprietary information (or a trade secret) is prohibited.  We should never unlawfully acquire or misuse trade secrets or other confidential or proprietary information of any third party.  Consult the We Safeguard Confidential Information sections of the Code to find out more."
      },

      {
        type: 'drag_and_drop',
        class: 'drag-and-drop',
        text: 'Pick the  items that do not align with Dell Technologies’ focus on securing confidential information or assets:',
        responseRequiredAll: false,
        questions: [
          {
            text: 'Picture of document with “Restricted-Confidential” marked on front, sitting out in the open',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-innovation-q2-pick-the-images-1.jpg',
            answers: [
              {
                id: 1,
                text: 'answer-1',
              }
            ],
            response: 0
          },
          {
            text: 'Picture of a Dell laptop in a room with no one around',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-innovation-q2-pick-the-images-2.jpg',
            answers: [
              {
                id: 2,
                text: 'answer-2',
              }
            ],
            response: 0
          },
          {
            text: 'Photo of someone’s family on a desk',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-innovation-q2-pick-the-images-3.jpg',
            answers: [
              {
                id: 3,
                text: 'answer-3',
              }
            ],
            response: 1
          },
          {
            text: 'List of passwords on a sticky note on someone’s cube/office wall',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-innovation-q2-pick-the-images-4.jpg',
            answers: [
              {
                id: 4,
                text: 'answer-4',
              }
            ],
            response: 0
          }
        ],
        message: 'Everyone is responsible for the appropriate protection, management and disposition of Dell Technologies information in accordance with this Code, our policies and standards and applicable law. Consult the We Practice Effective Information Lifecycle Management section of the Code for more information. '
      },



      {
        type: 'sentence_drop_down',
        class: 'sentence-drop-down q3',
        text: 'Complete the sentence:',
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
        responseRequiredAll: true,
        questions: [
          {
            id:'q1',
            text: 'Always ',
            answers: [
              {
                text: 'communicate'
              },
              {
                text: 'throw a party'
              }
            ],
            response: 0
          },

          {
            id:'q2',
            text: 'in way that supports our business, values and ',
            answers: [
              {
                text: 'diminishes'
              },
              {
                text: 'enhances'
              }
            ],
            response: 1
          },
          {
            id:'q3',
            text: 'our reputation and ',
            answers: [
              {
                text: 'brand'
              },
              {
                text: 'fashion sense'
              }
            ],
            response: 0
          },
          {
            id:'q4',
            text: '. ',
            answers: [
              {
                text: 'Secret'
              },
              {
                text: 'Public'
              }
            ],
            response: 1
          },
          {
            id:'q5',
            text: 'statements on behalf of Dell Technologies are only permitted by  ',
            answers: [
              {
                text: 'children'
              },
              {
                text: 'authorized individuals'
              }
            ],
            response: 1
          },
          {
            id:'q6',
            text: '. Unless you have been authorized to ',
            answers: [
              {
                text: 'speak'
              },
              {
                text: 'laugh'
              }
            ],
            response: 0
          },
          {
            id:'q7',
            text: ', do not respond to media requests. ',
            answers: [
              {
                text: 'Payroll'
              },
              {
                text: 'Corporate Communications'
              }
            ],
            response: 1
          }

        ],
        questionEnd: "should be involved.",
        message: "We should always communicate in ways that support Dell Technologies’ business, values and enhances our reputation and brand. Public statements on behalf of Dell Technologies are only permitted by authorized individuals. Consult the We Communicate Responsibly section of the Code for more information. "
      }
    ]
  },


  customer : {
    start: {
      title: 'Customer',
      text: 'Do you know and understand the key concepts within the Dell Technologies Code of Conduct?  Let’s check your Code IQ!'
    },

    end:{
      text: 'Thank you for completing the IQ Challenge. Links to specific internal policies related to the Customer section can be found below.',
      links:[
          {
            text: "Global Data Privacy Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Data%20Privacy%20Policy%20-%20English.pdf?Web=1"
          },
          {
            text: "Dell EMC Partner Code of Conduct",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/Documents/Code%20of%20Conduct/DELL%20EMC%20Partner%20Code%20of%20Conduct_FINAL.pdf"
          },
          {
            text: "Product Regulatory Compliance Policy",
            url: "http://www.dell.com/learn/us/en/uscorp1/regulatory-compliance?c=us&l=en&s=corp"
          },
          {
            text: "Global Competition Law Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Competition%20Law%20Policy%20-%20English.pdf&action=default"
          },
          {
            text: "Code of Conduct Addendum for Dell Technologies' US Government Contracting Operations",
            url: "http://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/code-of-conduct-addendum.pdf"
          },
          {
            text: "Dell Quality Policy",
            url: "http://intranet.dell.com/pg/ISOCert/CMS%20%20Quality%20Policy%20Drafts/Dell%20Quality%20Policy/Current%20Dell%20Quality%20Policy/Dell%20Quality%20Policy%20May%202016%20Final.pdf"
          }
        ]
    },

    quizzes : [

      // who said it
      {
        index: 0,
        type: 'who_said_it',
        class: 'who-said-it',
        text: 'Who said it',
        responseRequiredAll: true,
        questions: [
          {
            text: 'We are working with a vendor who has a list of email addresses for prospective customers. Can we use the list for a new product marketing campaign? <span class="text-weight-medium">Who has the correct response?</span>',
            answers: [
              {
                id: 1,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-customer-q1-who-said-it-1.jpg',
                text: 'Jackie',
                subText: 'Who cares…we’ve paid for access to this list so it’s our decision how to use it!'
              },
              {
                id: 2,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-customer-q1-who-said-it-3.jpg',
                text: 'Rex ',
                subText: 'Different countries may have special rules about collecting emails and gaining permission for use. Ask the Privacy team.'
              },
              {
                id: 3,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-customer-q1-who-said-it-2.jpg',
                text: 'Robert',
                subText: 'Some countries that have tough rules around collecting and using email, but how will they know anyway?  I say do it.'
              }
            ],
            response: 1
          }
        ],
        message: 'Most countries have rules about collecting information and the type of consent needed. Consult the We Protect the Privacy of Customer Personal Information section of the Code for more information.'
      },


      // sentence drop down
      {
        index: 1,
        type: 'sentence_drop_down',
        class: 'sentence-drop-down q2',
        text: 'Complete the sentence:',
        responseRequiredAll: true,
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
        questions: [
          {
            id:'q1',
            text: 'All of our products must meet quality standards, meet legal and regulatory requirements and also ',
            answers: [
              {
                text: 'is safe, secure and dependable.'
              },
              {
                text: 'dangerous, ugly and unreliable.'
              },
              {
                text: 'unnecessary, vulnerable and toxic.'
              }
            ],
            response: 0
          }

        ],
        questionEnd: "",
        message: "For more information about Dell’s focus on quality, security and safety in our solutions, consult the We Are Committed to Quality, Security and Safety in our Solutions section of the Code.",
      },

      // true false
      {
        index: 2,
        type: 'true_false',
        class: 'true-false',
        text: 'True or false',
        responseRequiredAll: true,
        questions: [
          {
            id: 1,
            text: 'Virtually all countries have laws prohibiting or regulating transactions or relationships that could limit competition.',
            answers: [
              {
                id: 'q-1-a-1',
                text: 'true',
                name: 'answer-1'
              },
              {
                id: 'q-1-a-2',
                text: 'na',
                name: 'answer-1'
              },
              {
                id: 'q-1-a-3',
                text: 'false',
                name: 'answer-1'
              }
            ],
            response: 0
          },
          {
            id: 2,
            text: 'Violation of competition laws may result in discipline and could even result in civil or criminal penalties for you and the company even result in civil or criminal penalties for you and the company.',
            answers: [
              {
                id: 'q-2-a-1',
                text: 'true',
                name: 'answer-2'
              },
              {
                id: 'q-2-a-2',
                text: 'na',
                name: 'answer-2'
              },
              {
                id: 'q-2-a-3',
                text: 'false',
                name: 'answer-2'
              }
            ],
            response: 0
          },
          {
            id: 3,
            text: 'We can enter into agreements that attempt to fix or control price.',
            answers: [
              {
                id: 'q-3-a-1',
                text: 'true',
                name: 'answer-4'
              },
              {
                id: 'q-3-a-2',
                text: 'na',
                name: 'answer-4'
              },
              {
                id: 'q-3-a-3',
                text: 'false',
                name: 'answer-4'
              }
            ],
            response: 1
          },
          {
            id: 4,
            text: 'Avoid discussing prices, terms of sale, customers, bids and other confidential information with competitors.',
            answers: [
              {
                id: 'q-4-a-1',
                text: 'true',
                name: 'answer-3'
              },
              {
                id: 'q-4-a-2',
                text: 'na',
                name: 'answer-3'
              },
              {
                id: 'q-4-a-3',
                text: 'false',
                name: 'answer-3'
              }
            ],
            response: 0
          },

          {
            id: 5,
            text: 'We can boycott specific customers or suppliers.',
            answers: [
              {
                id: 'q-5-a-1',
                text: 'true',
                name: 'answer-5'
              },
              {
                id: 'q-5-a-2',
                text: 'na',
                name: 'answer-5'
              },
              {
                id: 'q-5-a-3',
                text: 'false',
                name: 'answer-5'
              }
            ],
            response: 1
          },
          {
            id: 6,
            text: 'If you have a question about specific situation or know of a violation, please keep it to yourself.',
            answers: [
              {
                id: 'q-6-a-1',
                text: 'true',
                name: 'answer-6'
              },
              {
                id: 'q-6-a-2',
                text: 'na',
                name: 'answer-6'
              },
              {
                id: 'q-6-a-3',
                text: 'false',
                name: 'answer-6'
              }
            ],
            response: 1
          }
        ],
        message: 'We believe that a free and competitive market serves our customers best. Refer to the “We Compete Fairly” section of the Code for more information.'
      },

      // sentence drop down
      {
        index: 3,
        type: 'sentence_drop_down',
        class: 'sentence-drop-down  q4',
        text: 'Complete the sentence:',
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
        responseRequiredAll: true,
        questions: [
          {
            id:'q1',
            text: 'When contracting with a customer ',
            answers: [
              {
                text: 'always'
              },
              {
                text: 'never'
              }
            ],
            response: 0
          },

          {
            id:'q2',
            text: 'be sure to follow established policies, standards, procedures and controls that ',
            answers: [
              {
                text: 'govern'
              },
              {
                text: 'ruin'
              }
            ],
            response: 0
          },
          {
            id:'q3',
            text: 'the negotiation and approval of ',
            answers: [
              {
                text: 'contracts'
              },
              {
                text: 'friendships'
              }
            ],
            response: 0
          }

        ],
        questionEnd: ".",
        message: "Dell prohibits side letters or unauthorized commitments that fall outside of established policies, standards, procedures and controls. Refer to the We Promote Proper Pricing and Contracting section of the Code for more information."
        },

      // multiple choice
      {
        index: 4,
        type: 'multiple_choice',
        class: 'multiple-choice q5',
        text: '',
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-multiple-choice-mobile.jpg',
        responseRequiredAll: true,
        questions: [
          {
            text: 'What should we do if of our subcontractors allegedly billed a government customer for a US$10,000 server that was not part of their order? <span class="text-weight-medium">Pick correct answer</span>',
            answers: [
              {
                id: 1,
                text: 'You must not ignore suspicious activity relating to government contracts. Report the matter immediately using any of the available internal reporting avenues, such as the ethics helpline.'
              },
              {
                id: 2,
                text: 'Wait to see if the government customer even notices the discrepancy before you say or do anything.'
              },
              {
                id: 3,
                text: 'You shouldn’t worry about it. It is an issue with the subcontractor, so it’s really not our problem.'
              }
            ],
            response: 0
          }
        ],

        message:"Contracts with government customers, or commercial transactions financed in whole or in part with public funds, have additional requirements.  Consult the We Follow Government Contract Regulations section of the Code for more information. "
      }

    ]
  },


  integrity : {
    start: {
      title: 'Integrity',
      text: 'Do you know and understand the key concepts within the Dell Technologies Code of Conduct?  Let’s check your Code IQ!'
    },

    end:{
      text: 'Thank you for completing the IQ Challenge. Links to specific internal policies related to the Integrity section can be found below. ',
      links:[
          {
            text: "Global Conflicts of Interest Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Conflicts%20of%20Interest%20Policy%20-%20English.pdf&action=default"
          },
          {
            text: "Global Family, Romantic or Other Relationships Policy",
            url: "https://myhr.one.dell.com/Global/Policies/Personal/Policies_All/Family_Romantic_Other_Relationships.pdf"
          },
          {
            text: "Global Gifts & Hospitality Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Gifts%20and%20Hospitality%20Policy%20-%20English.pdf&action=default"
          },
          {
            text: "Dell Giving Site",
            url: "https://dell.yourcause.com/home#/engagement/3504c085-46b1-4edc-bfe9-e7d2b68d8eef"
          },
          {
            text: "Facilities Service Request site",
            url: "http://intranet.dell.com/facilities/global/Pages/global/service_request.htm"
          },
          {
            text: "Ethics Helpline (web or phone)",
            url: "https://secure.ethicspoint.com/domain/media/en/gui/43926/index.html"
          },
          {
            text: "Global Policy on Raising and Investigating Potential Ethics and Compliance Violations & Anti-retaliation",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Policy%20on%20Raising%20and%20Investigating%20Potential%20Ethics%20and%20Compliance%20Violations%20and%20Anti-Retaliation%20-%20English.pdf&action=default"
          }
        ]
    },

    quizzes : [

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best identifies a conflicting scenario.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'Dell Technologies personnel should not be involved in any employment-related decisions',
              answers: [
                {
                  id: 1,
                  text: '...regarding a family member or someone with whom they have a romantic or very close personal relationship.'
                },
                {
                  id: 2,
                  text: '...unless they are in Human Resources.'
                },
                {
                  id: 3,
                  text: '...unless it is to hire a new company mascot.'
                }
              ],
              response: 0
            },
          ],

          message:"We avoid any activity or personal interest that creates or appears to create a conflict between our interests and the interest of Dell Technologies or that might impair, or appear to impair, our ability to perform work objectively and effectively.  Consult the We Avoid Conflicts of Interest section of the Code for more information."
        },

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best identifies Dell's position of employees' involvement in an expert network.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'Participation in a paid research or "expert" network is',
              answers: [
                {
                  id: 1,
                  text: '...fine as long as you don\'t participate, don\'t get paid and you aren\'t an expert. '
                },
                {
                  id: 2,
                  text: '...not allowed for any active team member, as there is too much opportunity for confidential information to pass between parties.'
                },
                {
                  id: 3,
                  text: '...allowed only on days that end in the letter "z".'
                }
              ],
              response: 1
            },
          ],

          message:"We avoid any activity or personal interest that creates or appears to create a conflict between our interests and the interest of Dell Technologies or that might impair, or appear to impair, our ability to perform work objectively and effectively.  Consult the We Avoid Conflicts of Interest section of the Code for more information."
        },

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best defines Dell's policy on outside employment.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'Active Dell Technologies employees should never accept additional employment',
              answers: [
                {
                  id: 1,
                  text: '...unless that employment is a promotion at Dell.'
                },
                {
                  id: 2,
                  text: '...unless the additional job is an action hero.'
                },
                {
                  id: 3,
                  text: '...if the other organization is or could be competitive with Dell Technologies products, solutions or services.'
                }
              ],
              response: 2
            },
          ],

          message:"We avoid any activity or personal interest that creates or appears to create a conflict between our interests and the interest of Dell Technologies or that might impair, or appear to impair, our ability to perform work objectively and effectively.  Consult the We Avoid Conflicts of Interest section of the Code for more information."
        },

        {
          type: 'true_false',
          class: 'true-false',
              text: 'True or false',
          responseRequiredAll: true,
          questions: [
            {
              id: 1,
              text: 'Anyone can use company funds to give to any charity of their choice, regardless of its status as an approved charitable organization through Dell Giving. ',
              answers: [
                {
                  id: 'q-1-a-1',
                  text: 'true',
                  name: 'answer-1'
                },
                {
                  id: 'q-1-a-2',
                  text: 'na',
                  name: 'answer-1'
                },
                {
                  id: 'q-1-a-3',
                  text: 'false',
                  name: 'answer-1'
                }
              ],
              response: 1
            },
            {
              id: 2,
              text: 'Public Customers include employees of any country’s government (at any level), or any other government owned or funded entity.  There are  often restrictions on what we can provide to them. ',
              answers: [
                {
                  id: 'q-2-a-1',
                  text: 'true',
                  name: 'answer-2'
                },
                {
                  id: 'q-2-a-2',
                  text: 'na',
                  name: 'answer-2'
                },
                {
                  id: 'q-2-a-3',
                  text: 'false',
                  name: 'answer-2'
                }
              ],
              response: 0
            },
            {
              id: 3,
              text: 'There are no limits on the cost or frequency of a gift or hospitality we are allowed to provide to customers.',
              answers: [
                {
                  id: 'q-3-a-1',
                  text: 'true',
                  name: 'answer-3'
                },
                {
                  id: 'q-3-a-2',
                  text: 'na',
                  name: 'answer-3'
                },
                {
                  id: 'q-3-a-3',
                  text: 'false',
                  name: 'answer-3'
                }
              ],
              response: 1
            },
            {
              id: 4,
              text: 'Events should have a legitimate business purpose, which ideally includes discussion and/or demonstration of products or solutions. ',
              answers: [
                {
                  id: 'q-4-a-1',
                  text: 'true',
                  name: 'answer-4'
                },
                {
                  id: 'q-4-a-2',
                  text: 'na',
                  name: 'answer-4'
                },
                {
                  id: 'q-4-a-3',
                  text: 'false',
                  name: 'answer-4'
                }
              ],
              response: 0
            },
            {
              id: 5,
              text: 'We may not solicit, accept or receive any gift or hospitality that may be perceived as improperly influencing a business decision.',
              answers: [
                {
                  id: 'q-5-a-1',
                  text: 'true',
                  name: 'answer-5'
                },
                {
                  id: 'q-5-a-2',
                  text: 'na',
                  name: 'answer-5'
                },
                {
                  id: 'q-5-a-3',
                  text: 'false',
                  name: 'answer-5'
                }
              ],
              response: 0
            },
            {
              id: 6,
              text: 'Our products may freely be given as gifts to others, without any approvals. ',
              answers: [
                {
                  id: 'q-6-a-1',
                  text: 'true',
                  name: 'answer-6'
                },
                {
                  id: 'q-6-a-2',
                  text: 'na',
                  name: 'answer-6'
                },
                {
                  id: 'q-6-a-3',
                  text: 'false',
                  name: 'answer-6'
                }
              ],
              response: 1
            }

          ],
          message: 'Business courtesies should never be used to influence a business decision or undermine the integrity of our relationships. We only make charitable contributions consistent with our giving goals and encourage team members to support their communities through appropriate activities. Consult the We Give and Accept Gifts and Hospitality Appropriately and We Engage in Charitable Contributions and Activities sections of the Code for more information. '
        },

      {
        type: 'who_said_it',
        class: 'who-said-it',
        text: 'Who said it text',
        responseRequiredAll: true,
        questions: [
          {
            text: 'I have a good friend who is running for political office and has asked if I would endorse him at a rally being held outside of business hours. Is that a problem?  <span class="text-weight-medium">Select best response.</span>',
            answers: [
              {
                id: 1,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-integrity-q3-who-said-it-1.jpg',
                text: 'Rachel',
                subText: 'Not a problem. Just ensure the endorsement is a personal one and not on behalf of Dell Technologies.'
              },
              {
                id: 2,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-integrity-q3-who-said-it-2.jpg',
                text: 'Michael',
                subText: 'We should not have political views and ever endorse anyone, regardless of where we live. '
              },
              {
                id: 3,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-integrity-q3-who-said-it-3.jpg',
                text: 'Joe',
                subText: 'You could hold the rally at the office, I think we’d all like to meet her.'
              }
            ],
            response: 0
          }
        ],
        message: 'Team members must not communicate with public officials regarding Dell Technologies-related policy matters or claim to represent Dell Technologies with policy makers except as authorized or directed by the Government Affairs team.  Consult the We Support Political Activity section of the Code for more information. '
      },


      {
        type: 'sentence_drop_down',
        class: 'sentence-drop-down q4',
        text: 'Complete the sentence:',
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
        responseRequiredAll: true,
        questions: [
          {
            id:'q1',
            text: 'If you suspect a ',
            answers: [
              {
                text: 'violation'
              },
              {
                text: 'protection '
              }
            ],
            response: 0
        },
        {
          id:'q2',
          text: 'of applicable laws, regulations, our Code or policies, please speak up.  Contact a manager, Human Resources, the Legal Department, Global Ethics & Compliance or our global ',
          answers: [
            {
              text: 'Ethics Helpline'
            },
            {
              text: 'Harmline'
            }
          ],
          response: 0
        },
        {
          id:'q3',
          text: 'We do not tolerate ',
          answers: [
            {
              text: 'retaliation'
            },
            {
              text: 'leniency'
            }
          ],
          response: 0
        }

        ],
        questionEnd: "against anyone who reports suspected misconduct or assists with an investigation or audit in good faith.",
        message: "It is our responsibility to speak up and raise any suspected violations of applicable laws or regulations, this Code of Conduct or any policy. Consult the We Raise Issues and Concerns and We Investigate and Address Concerns sections of the Code for more information. ",
      }

    ]
  },



  results : {
    start: {
      title: 'Results',
      text: 'Do you know and understand the key concepts within the Dell Technologies Code of Conduct?  Let’s check your Code IQ!'
    },

    end:{
      text: 'Thank you for completing the IQ Challenge. Links to specific internal policies related to the Results section can be found below.',
      links:[
          {
            text: "Securities Trading Policy",
            url: "http://intranet.dell.com/dept/legal/Corporate/CorporatePolicies/Documents/Dell%20Technologies%20Inc%20%20-%20Securities%20Trading%20Policy.pdf"
          },
          {
            text: "Global Anti-Corruption Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Anticorruption%20Policy.pdf"
          },
          {
            text: "Global Trade Compliance Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Trade%20Compliance%20Policy%20-%20English.pdf&action=default"
          },
          {
            text: "Global Travel & Expense Policy",
            url: "http://intranet.dell.com/sites/PAL/GOWWP/PRO.WWPGP.GlobalTandE_Policy.PAL.docx"
          }
        ]
    },


    quizzes : [

        {
          type: 'true_false',
          class: 'true-false',
          text: 'Mark "True" if the statement could be potentially considered a bribe and "False" if the statement is unlikely to be considered a bribe:',
          responseRequiredAll: true,
          questions: [
            {
              id: 1,
              text: 'Promising a customer that we will hire their family member in exchange for securing a business deal',
              answers: [
                {
                  id: 'q-1-a-1',
                  text: 'true',
                  name: 'answer-1'
                },
                {
                  id: 'q-1-a-2',
                  text: 'na',
                  name: 'answer-1'
                },
                {
                  id: 'q-1-a-3',
                  text: 'false',
                  name: 'answer-1'
                }
              ],
              response: 0
            },
            {
              id: 3,
              text: 'Inviting a channel partner to a new product demonstration event',
              answers: [
                {
                  id: 'q-3-a-1',
                  text: 'true',
                  name: 'answer-3'
                },
                {
                  id: 'q-3-a-2',
                  text: 'na',
                  name: 'answer-3'
                },
                {
                  id: 'q-3-a-3',
                  text: 'false',
                  name: 'answer-3'
                }
              ],
              response: 1
            },
            {
              id: 4,
              text: 'Channel partner using Dell-provided marketing funds to give a kickback to an end customer',
              answers: [
                {
                  id: 'q-4-a-1',
                  text: 'true',
                  name: 'answer-4'
                },
                {
                  id: 'q-4-a-2',
                  text: 'na',
                  name: 'answer-4'
                },
                {
                  id: 'q-4-a-3',
                  text: 'false',
                  name: 'answer-4'
                }
              ],
              response: 0
            },
            {
              id: 5,
              text: 'Providing an excessive product discount to a government customer (above and beyond what is customary)',
              answers: [
                {
                  id: 'q-5-a-1',
                  text: 'true',
                  name: 'answer-5'
                },
                {
                  id: 'q-5-a-2',
                  text: 'na',
                  name: 'answer-5'
                },
                {
                  id: 'q-5-a-3',
                  text: 'false',
                  name: 'answer-5'
                }
              ],
              response: 0
            },
            {
              id: 6,
              text: 'Onboarding a channel partner that has red flags for bribery concerns',
              answers: [
                {
                  id: 'q-6-a-1',
                  text: 'true',
                  name: 'answer-6'
                },
                {
                  id: 'q-6-a-2',
                  text: 'na',
                  name: 'answer-6'
                },
                {
                  id: 'q-6-a-3',
                  text: 'false',
                  name: 'answer-6'
                }
              ],
              response: 1
            },
            {
              id: 7,
              text: 'Paying for a customer to take a lavish trip during a public tender/bid',
              answers: [
                {
                  id: 'q-7-a-1',
                  text: 'true',
                  name: 'answer-7'
                },
                {
                  id: 'q-7-a-2',
                  text: 'na',
                  name: 'answer-7'
                },
                {
                  id: 'q-7-a-3',
                  text: 'false',
                  name: 'answer-7'
                }
              ],
              response: 0
            },
            // {
            //   id: 8,
            //   text: 'Providing a customer with a Dell Technologies logo coffee mug',
            //   answers: [
            //     {
            //       id: 'q-8-a-1',
            //       text: 'true',
            //       name: 'answer-8'
            //     },
            //     {
            //       id: 'q-8-a-2',
            //       text: 'na',
            //       name: 'answer-8'
            //     },
            //     {
            //       id: 'q-8-a-3',
            //       text: 'false',
            //       name: 'answer-8'
            //     }
            //   ],
            //   response: 1
            // }
          ],
          message: 'We are committed to winning business only on the merits and integrity of our products and solutions.  We do not tolerate bribery or corruption, regardless of where we are located or where we do business.  Consult the We Follow Anti-bribery and Anti-corruption Laws section of the Code for more information.'
        },


        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best defines the scope of an embargoed country.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'Even if an embargoed country (e.g. Iran) has an embassy or government-owned bank in a non-embargoed country (e.g. Germany),',
              answers: [
                {
                  id: 1,
                  text: '...it is still prohibited to do business with that embassy or bank.'
                },
                {
                  id: 2,
                  text: '...then you should take your picture in front of it.'
                },
                {
                  id: 3,
                  text: '...you may do business as long as you open your own bank account there.'
                }
              ],
              response: 0
            },
          ],

          message:"We comply with applicable laws regarding the import or export of goods, services, software and technologies, including US economic and trade sanctions laws and regulations, in every country in which we conduct business. Consult the We Follow Compliance with Trade Laws section of the Code for more information. "
        },

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best identifies a key value of Dell's Trade team.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'The Dell Global Trade Compliance Team',
              answers: [
                {
                  id: 1,
                  text: '...cannot be bothered.'
                },
                {
                  id: 2,
                  text: '...is the best group to raise questions or concerns about import or export situations.'
                },
                {
                  id: 3,
                  text: '...expects team members to memorize the long list of sanctioned entities.'
                }
              ],
              response: 1
            },
          ],

          message:"We comply with applicable laws regarding the import or export of goods, services, software and technologies, including US economic and trade sanctions laws and regulations, in every country in which we conduct business. Consult the We Follow Compliance with Trade Laws section of the Code for more information. "
        },

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best identifies Trade red flags.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'Sales personnel should always be probing for and alert to',
              answers: [
                {
                  id: 1,
                  text: '...our customers\' favorite color.'
                },
                {
                  id: 2,
                  text: '...if weather will impact product delivery.'
                },
                {
                  id: 3,
                  text: '...where the product is going, its end use, the type of product purchased and who is purchasing.'
                }
              ],
              response: 2
            },
          ],

          message:"We comply with applicable laws regarding the import or export of goods, services, software and technologies, including US economic and trade sanctions laws and regulations, in every country in which we conduct business. Consult the We Follow Compliance with Trade Laws section of the Code for more information. "
        },

        {
          type: 'sentence_connector',
          class: 'sentence-connector',
          text: "Select the end of the sentence that best shows what to do if a customer requests a shipping change.",
          responseRequiredAll: true,
          questions: [
            {
              text: 'If a customer calls, after an order is placed, to change the shipping to an embargoed country location, ',
              answers: [
                {
                  id: 1,
                  text: '...we always ensure we send back a thank you note.'
                },
                {
                  id: 2,
                  text: '...don\'t tell Global Trade Compliance about it.'
                },
                {
                  id: 3,
                  text: '...then that is a red flag and Global Trade Compliance should be contacted.'
                }
              ],
              response: 2
            },
          ],

          message:"We comply with applicable laws regarding the import or export of goods, services, software and technologies, including US economic and trade sanctions laws and regulations, in every country in which we conduct business. Consult the We Follow Compliance with Trade Laws section of the Code for more information. "
        },

        {
          type: 'sentence_drop_down',
          class: 'sentence-drop-down q3',
          text: 'Complete the sentence:',
          image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
          responseRequiredAll: true,
          questions: [
            {
              id:'q1',
              text: '',
              answers: [
                {
                  text: 'Bad fashion and bad accessories'
                },
                {
                  text: 'Theft and fraud'
                }
              ],
              response: 1
            },

            {
              id:'q2',
              text: 'are crimes and will not be tolerated. When ',
              answers: [
                {
                  text: 'infants'
                },
                {
                  text: 'team members'
                }
              ],
              response: 1
            },
            {
              id:'q3',
              text: 'steal or commit fraud in their work for Dell Technologies, it ',
              answers: [
                {
                  text: 'damages'
                },
                {
                  text: 'enhances'
                }
              ],
              response: 0
            },
            {
              id:'q4',
              text: 'our brand and ',
              answers: [
                {
                  text: 'helps'
                },
                {
                  text: 'affects'
                }
              ],
              response: 1
            },


          ],
          questionEnd: "us all.",
          message: "Theft and/or fraud will not be tolerated as they are crimes and can also damage Dell’s brand. Consult the We Prevent Theft and Fraud section of the Code for more information. "
      },

      {
        type: 'who_said_it',
        class: 'who-said-it',
        text: 'Who said it',
        responseRequiredAll: true,
        questions: [
          {
            text: 'Which answer is correct out of the 3 options regarding traveling and/or expensing on behalf of Dell Technologies:',
            answers: [
              {
                id: 1,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-results-q4-who-said-it-3.jpg',
                text: 'James',
                subText: 'We can bring our spouse on business trips and the company will pay for their airfare also!'
              },
              {
                id: 2,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-results-q4-who-said-it-2.jpg',
                text: 'Tamara',
                subText: 'Since the company issued credit card has your name on it, you can use it for whatever you want!'
              },
              {
                id: 3,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-results-q4-who-said-it-1.jpg',
                text: 'Nick',
                subText: 'It is against Dell Technologies policy to intentionally falsify an expense report or manipulate expense receipts, and is considered fraud. '
              }
            ],
            response: 2
          }
        ],
        message: 'Team members are expected to act in compliance with policies and to truthfully, accurately and completely record travel and hospitality expenses. Consult the We Travel and Expense Responsibly section of the Code for more information. '
      }

    ]
  },


  winning : {
    start: {
      title: 'Winning Together',
      text: 'Do you know and understand the key concepts within the Dell Technologies Code of Conduct?  Let’s check your Code IQ!'
    },

    end:{
      text: 'Thank you for completing the IQ Challenge. Links to specific internal policies related to the Winning Together section can be found below.',
      links:[
          {
            text: "Global Diversity & Equal Employment Opportunity Policy",
            url: "https://myhr.one.dell.com/Global/Policies/Workplace/Policies_All/Diversity_Equal_Employment_Opportunity.pdf"
          },
          {
            text: "Global Workplace Anti-Harassment Policy",
            url: "https://myhr.one.dell.com/Global/Policies/Personal/Policies_All/Workplace_Anti_Harassment.pdf"
          },
          {
            text: "RBA Code of Conduct",
            url: "http://www.responsiblebusiness.org/standards/code-of-conduct/"
          },
          {
            text: "Global Workplace, Environment & Facilities Site",
            url: "http://intranet.dell.com/facilities/global/Pages/global/ehs.htm"
          },
          {
            text: "Global Data Privacy Policy",
            url: "https://legal.one.dell.com/sites/Legal4Clients/EnC/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/Legal4Clients/EnC/Documents/Policies%20and%20Standards/Global%20Data%20Privacy%20Policy%20-%20English.pdf&action=default"
          }
        ]
    },

    quizzes : [

      {
        type: 'sentence_drop_down',
        class: 'sentence-drop-down q1',
        text: 'Complete the sentence:',
        image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-sentence-dropdown-mobile.jpg',
        responseRequiredAll: true,
        questions: [
          {
            id:'q1',
            text: 'We nurture those relationships by seeking out and welcoming ',
            answers: [
              {
                text: 'diversity'
              },
              {
                text: 'similarities'
              }
            ],
            response: 0
          },

          {
            id:'q2',
            text: 'being open and honest in our interactions, and creating an environment of ',
            answers: [
              {
                text: 'silos'
              },
              {
                text: 'collaboration'
              }
            ],
            response: 1
          },
          {
            id:'q3',
            text: 'and inclusion.  We treat everyone with ',
            answers: [
              {
                text: 'dignity'
              },
              {
                text: 'disdain'
              }
            ],
            response: 0
          },
          {
            id:'q4',
            text: 'and respect, and comply with all ',
            answers: [
              {
                text: 'laws'
              },
              {
                text: 'norms'
              }
            ],
            response: 0
          },
          {
            id:'q5',
            text: 'relating to employment rights and working conditions in the  ',
            answers: [
              {
                text: 'countries'
              },
              {
                text: 'houses'
              }
            ],
            response: 0
          },


        ],
        questionEnd: "where our team members live and work.",
        message: "We believe in and value our people. Team member relationships and collaboration drive our business success. We perform better, are smarter, and have more fun working as a team than as individuals."
      },

      {
        type: 'who_said_it',
        class: 'who-said-it',
        text: 'Who said it',
        responseRequiredAll: true,
        questions: [
          {
            text: 'Which statement is most accurate when considering the Dell Technologies perspective and Code of Conduct?',
            answers: [
              {
                id: 1,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q2-who-said-it-1.jpg',
                text: 'Sylvie',
                subText: 'It’s always best to hire someone who thinks just like you, because work is done more quickly by those who agree.'
              },
              {
                id: 2,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q2-who-said-it-2.jpg',
                text: 'Matt ',
                subText: 'The best work environments are inclusive, foster open dialogue and the free expression of ideas.'
              },
              {
                id: 3,
                image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q2-who-said-it-3.jpg',
                text: 'Cecile',
                subText: 'Diversity just means maintaining demographic quotas.'
              }
            ],
            response: 1
          }
        ],
        message: 'We are committed to diversity, equality and providing a safe and productive work environment that fosters open dialogue and free expression of ideas, free of harassment, discrimination and hostile conduct.  Consult the We Value Diversity, Equal Opportunity and Respect section of the Code for more information. '
      },

      {
        type: 'true_false',
        class: 'true-false',
        text: 'True or false',
        responseRequiredAll: true,
        questions: [
          {
            id: 1,
            text: 'It’s acceptable to only hire men for finance roles – they are just better with numbers.',
            answers: [
              {
                id: 'q-1-a-1',
                text: 'true',
                name: 'answer-1'
              },
              {
                id: 'q-1-a-2',
                text: 'na',
                name: 'answer-1'
              },
              {
                id: 'q-1-a-3',
                text: 'false',
                name: 'answer-1'
              }
            ],
            response: 1
          },
          {
            id: 2,
            text: 'All team members should be able to do their jobs in a safe and respectful environment, without fear of harassment.',
            answers: [
              {
                id: 'q-2-a-1',
                text: 'true',
                name: 'answer-2'
              },
              {
                id: 'q-2-a-2',
                text: 'na',
                name: 'answer-2'
              },
              {
                id: 'q-2-a-3',
                text: 'false',
                name: 'answer-2'
              }
            ],
            response: 0
          },
          {
            id: 3,
            text: 'It isn’t possible to harass someone via email or social media, as it is only harassment if you are in person.',
            answers: [
              {
                id: 'q-3-a-1',
                text: 'true',
                name: 'answer-3'
              },
              {
                id: 'q-3-a-2',
                text: 'na',
                name: 'answer-3'
              },
              {
                id: 'q-3-a-3',
                text: 'false',
                name: 'answer-3'
              }
            ],
            response: 1
          },
          {
            id: 4,
            text: 'We respect the fundamental human rights of all persons in our value chain.',
            answers: [
              {
                id: 'q-4-a-1',
                text: 'true',
                name: 'answer-4'
              },
              {
                id: 'q-4-a-2',
                text: 'na',
                name: 'answer-4'
              },
              {
                id: 'q-4-a-3',
                text: 'false',
                name: 'answer-4'
              }
            ],
            response: 0
          },
          {
            id: 5,
            text: 'Making business decisions about a person based on their gender, race, ethnicity, country of origin, sexual  orientation or other protected classes is against Dell Technologies policy.',
            answers: [
              {
                id: 'q-5-a-1',
                text: 'true',
                name: 'answer-5'
              },
              {
                id: 'q-5-a-2',
                text: 'na',
                name: 'answer-5'
              },
              {
                id: 'q-5-a-3',
                text: 'false',
                name: 'answer-5'
              }
            ],
            response: 0
          },
          {
            id: 6,
            text: 'There is no global Dell Technologies Ethics Helpline that provides a way for people to speak up and raise concerns.',
            answers: [
              {
                id: 'q-6-a-1',
                text: 'true',
                name: 'answer-6'
              },
              {
                id: 'q-6-a-2',
                text: 'na',
                name: 'answer-6'
              },
              {
                id: 'q-6-a-3',
                text: 'false',
                name: 'answer-6'
              }
            ],
            response: 1
          }
        ],
        message: 'We treat everyone – team members, customers, business partners and other stakeholders – with dignity and respect. Consult the We Prevent Harassment and Discrimination section for the Code for more information.'
      },

      {
        type: 'drag_and_drop',
        class: 'drag-and-drop',
        text: 'Select the images that would be considered bad workplace practices:',
        responseRequiredAll: false,
        questions: [
          {
            text: 'Standing on a work chair with rollers to get something off of a high shelf',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-1.jpg',
            answers: [
              {
                id: 1,
                text: 'answer-1',
              }
            ],
            response: 0
          },
          {
            text: 'Picking up a really heavy box with bad posture causing the person to hurt themself',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-2.jpg',
            answers: [
              {
                id: 2,
                text: 'answer-2',
              }
            ],
            response: 0
          },
          {
            text: 'Having a plant on your desk',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-3.jpg',
            answers: [
              {
                id: 3,
                text: 'answer-3',
              }
            ],
            response: 1
          },
          {
            text: 'Storing chemicals in an open, unlocked area',
            image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-4.jpg',
            answers: [
              {
                id: 4,
                text: 'answer-4',
              }
            ],
            response: 0
            },
            {
              text: 'Throwing away batteries in a trash can and not properly recycling',
              image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-5.jpg',
              answers: [
                {
                  id: 5,
                  text: 'answer-4',
                }
              ],
              response: 0
            },
            {
              text: 'Cleaning up a wet spot on the floor to prevent others from slipping',
              image: '/content/dam/delltechnologies/assets/microsites/codeofconduct/2018/images/quiz-winning-q4-pick-the-images-6.jpg',
              answers: [
                {
                  id: 6,
                  text: 'answer-4',
                }
              ],
              response: 1
            }
        ],
        message: 'Whether at a Dell Technologies site or a customer site or another remote location, team members should perform work in full compliance with applicable health, safety and environmental laws and regulations. Consult the We Work Safely and Protect the Environment section of the Code for more information.'
      },

      {
        type: 'sentence_connector',
        class: 'sentence-connector',
        text: "Select the end of the sentence that best completes this statement about workplace safety and behavior.",
        responseRequiredAll: true,
        questions: [
          {
            text: 'A workplace free of violence, weapons and other disruptive behavior...',
            answers: [
              {
                id: 1,
                text: ' ...keeps team members safe.'
              },
              {
                id: 2,
                text: ' ...means you can bring your pets to work.'
              },
              {
                id: 3,
                text: ' ...limits our ability to have piñata parties.'
              }
            ],
            response: 0
          }
        ],

        message:"A non-violent workplace starts with being polite and respectful and trying to resolve disagreements calmly. Consult the We Ensure a Non-Violent Workplace section of the Code for more information."
      },
      {
        type: 'sentence_connector',
        class: 'sentence-connector',
        text: "Select the end of the sentence that best completes Dell's position on firearms in the workplace.",
        responseRequiredAll: true,
        questions: [
          {
            text: 'Dell Technologies policy prohibits the carrying of firearms',
            answers: [
              {
                id: 1,
                text: ' ...only on days that end with the letter "d".'
              },
              {
                id: 2,
                text: ' ...in Dell Technologies buildings or while conducting Dell Technologies business.'
              },
              {
                id: 3,
                text: ' ...as well as firelegs.'
              }
            ],
            response: 1
          }
        ],

        message: "A non-violent workplace starts with being polite and respectful and trying to resolve disagreements calmly. Consult the We Ensure a Non-Violent Workplace section of the Code for more information. "
      }

    ]
  }


};


quiz = new Vue({
  el: '#quiz-app',
  data: {
    intro:false,
    quiz: false,
    responseState: false,
    finished: false,

    quiz_name: '',
    quizContent: '',
    quizIndex: 0,
    quizScore: 0,
    quiz_type: 'none',
    question_index: 0,
    // question: '',
    answers: '',
    response: [],
    responseCorrect: [],
    responseMessage: '',
    responseRequiredAll: true,
    state: 'intro',
    quiz_class: 'none'
  },
  methods:{

  	startQuiz: function () {
      console.log('START');
      this.state = "quiz";

      //set quiz content
      this.quizContent = q[this.quiz_name];
      this.quizzes = q[this.quiz_name].quizzes;

      // set view states
      this.intro = false;
      this.quiz = true;

      this.loadQuiz();
  	},


    submitAnswer: function (qi, r, rc, name) {

      console.log("start");
      this.questionIndex = qi;
      this.response[qi] = r;
      // this.responseCorrect = rc;
      // console.log(this.quizzes[this.quizIndex].questions)
      for (var i = this.quizzes[this.quizIndex].questions.length - 1; i >= 0; i--) {
        // console.log(this.quizzes[this.quizIndex].questions[i].response)
        this.responseCorrect[i] = this.quizzes[this.quizIndex].questions[i].response;
      }

      console.log(this.responseCorrect);
      console.log(this.response);

      var responseStatus;
      if (this.response[qi] === this.responseCorrect[qi]) {
        console.log('correct');
        responseStatus = 'correct';
      } else {
        console.log('incorrect');
        responseStatus = 'incorrect';
      }
      if(this.quiz_type == "true_false"){
        var radios = document.getElementsByName(name);
        // console.log(radios)
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            $(radios[i].parentElement.parentElement).removeClass('correct incorrect')
            $(radios[i].parentElement.parentElement).addClass(responseStatus);
            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
      }

      if(this.quiz_type == "sentence_drop_down"){
        var quiz_types = document.getElementById(name);
        // console.log(quiz_types)
        $(quiz_types).parent().removeClass('correct incorrect')
        // console.log($(quiz_types).val());
        if($(quiz_types).val() !== 'select'){
          $(quiz_types).parent().addClass(responseStatus);
        }
      }

      if(this.quiz_type == "who_said_it"){
        var quiz_types = document.getElementById(name);
        // console.log(quiz_types)
        $('.answer-item').removeClass('selected');
        $(quiz_types).addClass('selected');
      }

      if(this.quiz_type == "drag_and_drop"){
        var quiz_types = document.getElementById(name);
        // console.log(quiz_types)
        $(quiz_types).addClass('selected');
        $(quiz_types).parent().removeClass('correct incorrect')
        $(quiz_types).parent().addClass(responseStatus);
      }

      this.validateQuiz();

    },


    // sentence dropdown onChange handler
    handleChange: function(e) {
        if(e.target.options.selectedIndex > -1) {
            console.log(e.target.options[e.target.options.selectedIndex].dataset.qi)

            // for (var i = this.quizzes[this.quizIndex].questions.length - 1; i >= 0; i--) {
            //   console.log(this.quizzes[this.quizIndex].questions[i].response)
            //   // this.responseCorrect[i] = this.quizzes[this.quizIndex].questions[i].response;
            // }
            var qi = e.target.options[e.target.options.selectedIndex].dataset.qi;
            var r = parseInt(e.target.options[e.target.options.selectedIndex].dataset.index);
            var rc = parseInt(e.target.options[e.target.options.selectedIndex].dataset.rc);
            var id = e.target.id;
            // console.log(qi);
            // console.log(r);
            // console.log(rc);
            // console.log(id);
            if(e.target.options.selectedIndex != 0){
              this.submitAnswer(qi, e.target.options.selectedIndex-1, rc, id);
            }else{
              this.submitAnswer(qi, undefined, rc, id);
              console.log("selected");
            }

        }


    },

    submitQuiz: function () {

      var validate = this.validateQuiz();
      if(!validate){

        // alert("validate false");
        return;
      }

      this.state = "response";
      this.quiz = false;
      this.responseState = true;
      var points = [];

      // console.log(this.responseCorrect.length);

      for (var i = this.responseCorrect.length - 1; i >= 0; i--) {
        // console.log("this response : " + this.response[i]);
        if (this.response[i] === this.responseCorrect[i]) {
          points[i] = 100;
        } else {
          if(this.quiz_type == 'drag_and_drop' && this.response[i] === undefined && this.responseCorrect[i] === 1){
            // console.log('got undefined');
            points[i] = 100;
          }else{
            points[i] = 0;
          }

        }
      }

      var sum = 0;
      for (var i = points.length - 1; i >= 0; i--) {
       sum += points[i];
      }
      console.log(sum);

      var average = sum/points.length;
      console.log(average);

      this.quizScore = average;
      this.responseMessage = this.quizzes[this.quizIndex].message;



      setTimeout(function () {
        // console.log("enable next")
        $('.cta-next').attr('disabled', false);
        $('.cta-next').addClass('enable');
      }, 300);


      DellCOC.app.resizeEventHandler();

    },


    nextQuiz: function () {

      this.quizIndex++;
      // console.log(this.quizzes.length);

      if (parseInt(this.quizIndex) == parseInt(this.quizzes.length)){
        this.state = 'finished';
        this.quiz_class = 'none';
        this.responseState = false;
        this.finished = true;
      }else{
       this.loadQuiz();
      }
    },

    loadQuiz: function (){
      this.state = 'quiz';
      this.quiz = true;
      this.responseState = false;
      this.quiz_type = this.quizzes[this.quizIndex].type;
      this.questions = this.quizzes[this.quizIndex].questions;
      this.quiz_class = this.quizzes[this.quizIndex].class;
      var that = this;


      setTimeout(function () {
        // console.log("next quiz timeout");
        // console.log(that.quizzes[that.quizIndex].questions.length);
        $('.panel-content').addClass("question-count-"+that.quizzes[that.quizIndex].questions.length);
      }, 100);


      this.response = [];
      this.responseCorrect = [];
      this.responseRequiredAll = this.quizzes[this.quizIndex].responseRequiredAll;

      $('.cta-next').attr('disabled', true);
      $('.cta-next').removeClass('enable');

    },


    validateQuiz: function () {

      var questions = document.getElementsByClassName("question");

      // console.log(questions);

      // var radios = document.getElementsByName(name);
      // console.log(radios)
      if(this.responseRequiredAll === false && this.response.length > 0){
        $('.cta-submit').attr('disabled', false);
        $('.cta-submit').addClass('enable');
        return true;
      }
      for (var i = 0, length = questions.length; i < length; i++) {
        // console.log(questions[i]);
        // console.log(this.response[i]);
        if(this.response[i] == undefined){
          $('.cta-submit').attr('disabled', true);
          $('.cta-submit').removeClass('enable');
          return false;
        }
      }

      $('.cta-submit').attr('disabled', false);
      $('.cta-submit').addClass('enable');
      return true;

    },

    // resets quiz variables
    reset: function (){
      // alert('reset');
      // this.quiz_name = 'innovation';
      // this.quizContent = '';
      this.quizContent = q[this.quiz_name];
      this.quizIndex = 0;
      this.quizScore = 0;
      this.quiz_type = 'none';
      // this.question_index = 0;

      this.answers = '';
      this.response = [];
      this.responseCorrect = [];
      this.responseMessage = '';
      this.state = 'intro';
      this.quiz_class = 'none';

      this.intro = true;
      this.quiz = false;
      this.responseState = false;
      this.finished = false;

    }


  },
  created: function () {
    this.quizContent = q[this.quiz_name];
  },
  updated: function () {
    this.quizContent = q[this.quiz_name];
    // this.classes = this.quizzes[this.quizIndex].class
    DellCOC.utils.checkDevAssetPath();
    DellCOC.app.resizeEventHandler();
    DellCOC.quiz.bindEvents();
  },
  mounted: function () {
    DellCOC.utils.checkDevAssetPath();
  }
}).$mount('#quiz-app');
