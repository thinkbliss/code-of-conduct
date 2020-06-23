// 'use strict';
var currentPage;
var currentCategory;

if(window.location.href.indexOf("index.htm") > -1){
  currentPage = 'index.htm';

} else if(window.location.href.indexOf("customer.htm") > -1) {
  currentPage = 'customer.htm';
} else if(window.location.href.indexOf("how-we-win.htm") > -1) {
  currentPage = 'how-we-win.htm';
} else if(window.location.href.indexOf("innovation.htm") > -1) {
  currentPage = 'innovation.htm';
} else if(window.location.href.indexOf("integrity.htm") > -1) {
  currentPage = 'integrity.htm';
} else if(window.location.href.indexOf("message-from-the-ceo.htm") > -1) {
  currentPage = 'message-from-the-ceo.htm';
} else if(window.location.href.indexOf("results.htm") > -1) {
  currentPage = 'results.htm';
} else if(window.location.href.indexOf("speak-up.htm") > -1) {
  currentPage = 'speak-up.htm';
} else if(window.location.href.indexOf("winning-together.htm") > -1) {
  currentPage = 'winning-together.htm';


}


if(window.location.href.indexOf("rebellion-workspace") > -1)
{
  $("head").append('<base href="/rebellion-workspace/dell-coc/html/'+currentPage+'">');
}else if (window.location.href.indexOf("localhost/Rebellion/Dell_CoC") > -1) {
  $("head").append('<base href="/Rebellion/Dell_CoC/git/html/'+currentPage+'">');
}else if (window.location.href.indexOf("localhost") > -1
  || window.location.href.indexOf("local") > -1) {
  $("head").append('<base href="/html/'+currentPage+'">');
}else if (window.location.href.indexOf("thisisarebellion.com") > -1) {
  $("head").append('<base href="/clients/delltech/dell-coc/html/'+currentPage+'">');
}else {
  $("head").append('<base href="/en-us/microsites/codeofconduct/2018/'+currentPage+'">');
}






// //////////////////////////////////////////////
// MESSAGE FROM CEO
// //////////////////////////////////////////////
var MessageContent = $('#message-content').html();
var Message = Vue.component('Message', {
  template: '<div class="category-article no-subnav">'+ MessageContent +'</div>',
  data: function () {
    return {
      title: 'How We Win'
    }
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - CEO Message';
      $('meta[name=description]').attr('content', 'Integrity matters. It matters to our customers, partners, colleagues and communities. And it matters greatly to me.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {

      app.title = "Message From Our CEO";

      $('.article').addClass('single-page');

      DellCOC.app.articleLoaded();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      setTimeout(function () {
        DellCOC.app.loadVideo('5545364147001');
      },1500);

    })
  },
  destroyed: function () {
    $('.article').removeClass('single-page');
  }
});

var MessageDefaultContent = $('#message-default-content').html();
var MessageDefault = Vue.component('MessageDefault', {
  template: '<div class="">'+ MessageDefaultContent +'</div>',
  data: function () {
    return {
      title: 'MessageDefaultContent'
    }
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});




// //////////////////////////////////////////////
// HOW WE WIN
// //////////////////////////////////////////////
var HowWeWinContent = $('#how-we-win-content').html();
var HowWeWin = Vue.component('HowWeWin', {
  template: '<div class="category-article no-subnav">'+ HowWeWinContent +'</div>',
  data: function () {
    return {
      title: 'How We Win'
    }
  },
  methods: {
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - How We Win';
      $('meta[name=description]').attr('content', 'How We Win is not just the name of our Code. It is a reflection of our values and the high standards we set for ourselves.');
  },
  mounted: function () {
    // jQuery code
    $(function () {

      app.title = "How We Win";

      $('.article').addClass('single-page');

      // DellCOC.app.articleLoaded();

      // $(".main-content .cta-video").on("click", function (e) {
      //   e.preventDefault();
      //   console.log("cta-video");
      //   DellCOC.app.player.play();
      // });


      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      setTimeout(function () {
        DellCOC.app.loadVideo('5811893254001');
      },1500);

    })
  },
  destroyed: function () {
    $('.article').removeClass('single-page');
  }
});

var HowWeWinDefaultContent = $('#how-we-win-default-content').html();
var HowWeWinDefault = Vue.component('HowWeWinDefault', {
  template: '<div class="">'+ HowWeWinDefaultContent +'</div>',
  data: function () {
    return {
      title: 'HowWeWinDefaultContent'
    }
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});




// //////////////////////////////////////////////
// SPEAK UP FROM CEO
// //////////////////////////////////////////////
var SpeakUpContent = $('#speak-up-content').html();
var SpeakUp = Vue.component('SpeakUp', {
  template: '<div class="category-article no-subnav">'+ SpeakUpContent +'</div>',
  data: function () {
    return {
      title: 'How We Win'
    }
  },
  methods: {
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - Speak Up';
      $('meta[name=description]').attr('content', 'Protect Dell Technologies and our customers by reporting suspicious or unethical behavior');
  },
  mounted: function () {
    // jQuery code
    $(function () {

      app.title = "Speak Up";

      $('.article').addClass('single-page');

      // DellCOC.app.articleLoaded();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      // setTimeout(function () {
      //   DellCOC.app.loadVideo('5545364147001');
      // },1500);

    })
  },
  destroyed: function () {
    $('.article').removeClass('single-page');
  }
});

var SpeakUpDefaultContent = $('#speak-up-default-content').html();
var SpeakUpDefault = Vue.component('SpeakUpDefault', {
  template: '<div class="">'+ SpeakUpDefaultContent +'</div>',
  data: function () {
    return {
      title: 'Speak Up'
    }
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});

// //////////////////////////////////////////////
// CUSTOMER COMPONENTS
// //////////////////////////////////////////////
var customerContent = $('#customer-content').html();
var Customer = Vue.component('Customer', {
  template: '<div class="customer-content category-landing">'+ customerContent +'</div>',
  data: function() {
    return {
      title: 'Customer',
      category: 'customer'
    }
  },
  methods: {
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - Customer';
      $('meta[name=description]').attr('content', 'We believe our customer relationships are the ultimate differentiator and the foundation for our success.');
  },
  mounted: function () {

    // jQuery code
    $(function () {

      app.title = "Customer"

      currentCategory = 'customer';

      DellCOC.app.showMainNav();

      $('#clone-container').show();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        DellCOC.app.player.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      $(".main-content .cta-qa").on("click", function (e) {
        e.preventDefault();
        DellCOC.quiz.modal(currentCategory);
      });

      $(window).scrollTop(0);


      setTimeout(function () {
        DellCOC.app.loadVideo('5811894149001');
      },2000);

    })
  },
  beforeDestroy: function () {
    console.log('BEFORE DESTROY!!!');
  }
});

// CUSTOMER ARTICLE
var CustomerArticleContent = $('#customer-article-content').html();
var CustomerArticle = Vue.component('CustomerArticle', {
  template: '<div class="category-article">'+ CustomerArticleContent +'</div>',
  data: function () {
    return {
      title: 'Customer Article',
      category: 'customer'
    }
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Customer"
      currentCategory = 'customer';
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});

// CUSTOMER ARTICLE PAGES
var CustomerProtectContent = $('#customer-protect-content').html();
var CustomerProtect = Vue.component('CustomerProtect', {
  template: ''+ CustomerProtectContent +'',
  data: function () {
    return {
      title: 'Customer Protect'
    }
  },
  created: function () {
      document.title = 'We Protect Customer Personal Information';
      $('meta[name=description]').attr('content', 'We must protect and be intentional and careful about the collection, access and disclosure of any customer personal information we handle.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var CustomerCommittedContent = $('#customer-committed-content').html();
var CustomerCommitted = Vue.component('CustomerCommitted', {
  template: ''+ CustomerCommittedContent +'',
  data: function () {
    return {
      title: 'Customer Committed'
    }
  },
  created: function () {
      document.title = 'We Are Committed to Quality, Security and Safety';
      $('meta[name=description]').attr('content', 'All of our products must be safe, secure, and dependable, and must meet all applicable legal and regulatory requirements, as well as the quality standards as set forth in our Quality Policy.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var CustomerCompeteContent = $('#customer-compete-content').html();
var CustomerCompete = Vue.component('CustomerCompete', {
  template: ''+ CustomerCompeteContent +'',
  data: function () {
    return {
      title: 'Customer Compete'
    }
  },
  created: function () {
      document.title = 'We Compete Fairly';
      $('meta[name=description]').attr('content', 'We believe that a free and competitive market serves our customers best.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var CustomerPromoteContent = $('#customer-promote-content').html();
var CustomerPromote = Vue.component('CustomerPromote', {
  template: ''+ CustomerPromoteContent +'',
  data: function () {
    return {
      title: 'Customer Promote'
    }
  },
  created: function () {
      document.title = 'We Promote Proper Pricing and Contracting';
      $('meta[name=description]').attr('content', 'We must adhere to our established policies, standards, procedures and controls governing the negotiation and approval of contracts.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var CustomerFollowContent = $('#customer-follow-content').html();
var CustomerFollow = Vue.component('CustomerFollow', {
  template: ''+ CustomerFollowContent +'',
  data: function () {
    return {
      title: 'Customer Follow'
    }
  },
  created: function () {
      document.title = 'We Follow Government Contract Regulations';
      $('meta[name=description]').attr('content', 'Contracts with government customers, or commercial transactions financed in whole or in part with public funds, have additional requirements.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});




// //////////////////////////////////////////////
// WINNING TOGETHER COMPONENTS
// //////////////////////////////////////////////
var winningContent = $('#winning-content').html();
var Winning = Vue.component('Winning', {
  template: '<div class="winning-together-content category-landing">'+ winningContent +'</div>',
  data: function() {
    return {
      title: 'Winning'
    }
  },
  created: function () {
      document.title = 'Dell Tech Code of Conduct - Winning Together';
      $('meta[name=description]').attr('content', 'We believe in and value our people.  We perform better, are smarter, and have more fun working as a team than as individuals.');
  },
  methods: {
  },
  mounted: function () {

    // jQuery code
    $(function () {

      app.title = "Winning Together"

      currentCategory = 'winning';

      DellCOC.app.showMainNav();

      $('#clone-container').show();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      $(".main-content .cta-qa").on("click", function (e) {
        e.preventDefault();
        DellCOC.quiz.modal(currentCategory);
      });


      setTimeout(function () {
        DellCOC.app.loadVideo('5811891230001');
      },1500);


    })
  },
  beforeDestroy: function () {

    console.log('BEFORE DESTROY!!!');

    // DellCOC.app.player.pause();

  }
});

// WINNING TOGETHER ARTICLE
var WinningArticleContent = $('#winning-article-content').html();
var WinningArticle = Vue.component('WinningArticle', {
  template: '<div class="category-article">'+ WinningArticleContent +'</div>',
  data: function () {
    return {
      title: 'Winning Article'
    }
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Winning Together"
      currentCategory = 'winning';
      DellCOC.app.showMainNav();

      $('#clone-container').hide();

    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});

// WINNING ARTICLE PAGES
var WinningValueContent = $('#winning-value-content').html();
var WinningValue = Vue.component('WinningValue', {
  template: ''+ WinningValueContent +'',
  data: function () {
    return {
      title: 'Winning Value'
    }
  },
  created: function () {
      document.title = 'We Value Diversity, Equal Opportunity and Respect';
      $('meta[name=description]').attr('content', 'Dell is committed to diversity, equality, and providing a safe and productive work environment that fosters open dialogue free of harassment.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.showMainNav();
      DellCOC.app.articleLoaded();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var WinningPreventContent = $('#winning-prevent-content').html();
var WinningPrevent = Vue.component('WinningPrevent', {
  template: ''+ WinningPreventContent +'',
  data: function () {
    return {
      title: 'Winning Prevent'
    }
  },
  created: function () {
      document.title = 'We Prevent Harassment & Discrimination';
      $('meta[name=description]').attr('content', 'All team members should be able to do their jobs in a safe and respectful environment.  Harassment is prohibited and will not be tolerated.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var WinningRespectContent = $('#winning-respect-content').html();
var WinningRespect = Vue.component('WinningRespect', {
  template: ''+ WinningRespectContent +'',
  data: function () {
    return {
      title: 'Winning Respect'
    };
  },
  created: function () {
      document.title = 'We Respect Human Rights';
      $('meta[name=description]').attr('content', 'Dell Technologies respects the fundamental human rights of all persons in our value chain.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();

    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var WinningWorkContent = $('#winning-work-content').html();
var WinningWork = Vue.component('WinningWork', {
  template: ''+ WinningWorkContent +'',
  data: function () {
    return {
      title: 'Winning Work'
    };
  },
  created: function () {
      document.title = 'We Work Safely and Protect the Environment';
      $('meta[name=description]').attr('content', 'Employees are expected to perform their work in compliance with applicable health, safety and environmental laws, regulations and EHS requirements.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var WinningEnsureContent = $('#winning-ensure-content').html();
var WinningEnsure = Vue.component('WinningEnsure', {
  template: ''+ WinningEnsureContent +'',
  data: function () {
    return {
      title: 'Winning Ensure'
    };
  },
  created: function () {
      document.title = 'We Ensure a Non-Violent Workplace';
      $('meta[name=description]').attr('content', 'A workplace free of violence, weapons and other disruptive behavior keeps team members safe.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var WinningProtectContent = $('#winning-protect-content').html();
var WinningProtect = Vue.component('WinningProtect', {
  template: ''+ WinningProtectContent +'',
  data: function () {
    return {
      title: 'Winning Protect'
    };
  },
  created: function () {
      document.title = 'We Protect Team Members\' Personal Information';
      $('meta[name=description]').attr('content', 'We all have a responsibility to protect team members\' personal information.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});




// //////////////////////////////////////////////
// INNOVATION COMPONENTS
// //////////////////////////////////////////////
var innovationContent = $('#innovation-content').html();
var Innovation = Vue.component('Innovation', {
  template: '<div class="innovation-content category-landing">'+ innovationContent +'</div>',
  data: function() {
    return {
      title: 'Innovation'
    };
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - Innovation';
      $('meta[name=description]').attr('content', 'We believe our ability to innovate and cultivate breakthrough thinking is an engine for growth, success and progress.');
  },
  methods: {
  },
  mounted: function () {

    // jQuery code
    $(function () {

      app.title = "Innovation";

      currentCategory = 'innovation';

      DellCOC.app.showMainNav();
      $('#clone-container').show();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      $(".main-content .cta-qa").on("click", function (e) {
        e.preventDefault();
        DellCOC.quiz.modal(currentCategory);
      });


      setTimeout(function () {
        DellCOC.app.loadVideo('5811889149001');
      },1500);


    });
  },
  beforeDestroy: function () {

    console.log('BEFORE DESTROY!!!');

    // DellCOC.app.player.pause();

  }
});



// INNOVATION ARTICLE
var InnovationArticleContent = $('#innovation-article-content').html();
var InnovationArticle = Vue.component('InnovationArticle', {
  template: '<div class="category-article">'+ InnovationArticleContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Article'
    };
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Innovation"
      currentCategory = 'innovation';
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});

// INNOVATION ARTICLE PAGES
var InnovationSafeguardContent = $('#innovation-safeguard-content').html();
var InnovationSafeguard = Vue.component('InnovationSafeguard', {
  template: InnovationSafeguardContent,
  data: function () {
    return {
      title: 'Innovation Safeguard'
    };
  },
  created: function () {
      document.title = 'We Safeguard Our Confidential Information';
      $('meta[name=description]').attr('content', 'Misusing or disclosing information that Dell considers confidential or proprietary or a trade secret is prohibited.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var InnovationSafeguardOthersContent = $('#innovation-safeguard-others-content').html();
var InnovationSafeguardOthers = Vue.component('InnovationSafeguard', {
  template: ''+ InnovationSafeguardOthersContent +'',
  data: function () {
    return {
      title: 'Innovation Safeguard Others'
    };
  },
  created: function () {
      document.title = 'We Safeguard Confidential Information of Others';
      $('meta[name=description]').attr('content', 'Team members may not unlawfully acquire or misuse the trade secrets or other confidential or proprietary information of any third party.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var InnovationPracticeContent = $('#innovation-practice-content').html();
var InnovationPractice = Vue.component('InnovationPractice', {
  template: ''+ InnovationPracticeContent +'',
  data: function () {
    return {
      title: 'Innovation Practice'
    };
  },
  created: function () {
      document.title = 'We Practice Information Lifecycle Management';
      $('meta[name=description]').attr('content', 'Everyone is responsible for the protection, management and disposition of Dell Technologies information.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var InnovationInformationContent = $('#innovation-information-content').html();
var InnovationInformation = Vue.component('InnovationInformation', {
  template: ''+ InnovationInformationContent +'',
  data: function () {
    return {
      title: 'Innovation Information'
    };
  },
  created: function () {
      document.title = 'We Use Information Technology and Resources Wisely';
      $('meta[name=description]').attr('content', 'While some personal use of Dell Technologies resources is permissible, excessive or inappropriate personal use is prohibited.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var InnovationCommunicateContent = $('#innovation-communicate-content').html();
var InnovationCommunicate = Vue.component('InnovationCommunicate', {
  template: ''+ InnovationCommunicateContent +'',
  data: function () {
    return {
      title: 'Innovation Communicate'
    };
  },
  created: function () {
      document.title = 'We Communicate Responsibly';
      $('meta[name=description]').attr('content', 'We should always communicate in ways that support Dell Technologies\' business, values and purpose, and enhances our reputation and brand.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var InnovationPromoteContent = $('#innovation-promote-content').html();
var InnovationPromote = Vue.component('InnovationPromote', {
  template: ''+ InnovationPromoteContent +'',
  data: function () {
    return {
      title: 'Innovation Promote'
    };
  },
  created: function () {
      document.title = 'We Promote a Sustainable Approach';
      $('meta[name=description]').attr('content', 'Environmental responsibility is about incorporating sustainability into every aspect of what we do.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});



// //////////////////////////////////////////////
// INTEGRITY COMPONENTS
// //////////////////////////////////////////////
var integrityContent = $('#integrity-content').html();
var Integrity = Vue.component('Integrity', {
  template: '<div class="integrity-content category-landing">'+ integrityContent +'</div>',
  data: function() {
    return {
      title: 'Integrity'
    };
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - Integrity';
      $('meta[name=description]').attr('content', 'We believe integrity must always govern our fierce desire to win.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Integrity"

      currentCategory = 'integrity';

      DellCOC.app.showMainNav();
      $('#clone-container').show();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      $(".main-content .cta-qa").on("click", function (e) {
        e.preventDefault();
        DellCOC.quiz.modal(currentCategory);
      });

      setTimeout(function () {
        DellCOC.app.loadVideo('5811896076001');
      },1500);

    });
  },
  beforeDestroy: function () {
    // console.log('DESTROYED!!!');
    // DellCOC.app.player.pause();
  }

});


// INTEGRITY ARTICLE
var IntegrityArticleContent = $('#integrity-article-content').html();
var IntegrityArticle = Vue.component('IntegrityArticle', {
  template: '<div class="category-article">'+ IntegrityArticleContent +'</div>',
  data: function () {
    return {
      title: 'Integrity Article'
    };
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Integrity"
      currentCategory = 'integrity';
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});


var IntegrityAvoidContent = $('#integrity-avoid-content').html();
var IntegrityAvoid = Vue.component('IntegrityAvoid', {
  template: '<div class="">'+ IntegrityAvoidContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Avoid Conflicts of Interest';
      $('meta[name=description]').attr('content', 'A team member\'s activities can, intentionally or unintentionally, create a conflict of interest or an appearance of impropriety.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});



var IntegrityGiveContent = $('#integrity-give-content').html();
var IntegrityGive = Vue.component('IntegrityGive', {
  template: '<div class="">'+ IntegrityGiveContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Give'
    };
  },
  created: function () {
      document.title = 'We Give & Accept Gifts & Hospitality Appropriately';
      $('meta[name=description]').attr('content', 'Gifts and hospitality must be given and received in a responsible manner and may never be used to influence a business decision.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var IntegrityEngageContent = $('#integrity-engage-content').html();
var IntegrityEngage = Vue.component('IntegrityEngage', {
  template: '<div class="">'+ IntegrityEngageContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Engage'
    };
  },
  created: function () {
      document.title = 'We Engage in Charitable Contributions & Activities';
      $('meta[name=description]').attr('content', 'Dell makes charitable contributions consistent with our giving goals and encourages employees to support their communities through appropriate actions');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var IntegritySupportContent = $('#integrity-support-content').html();
var IntegritySupport = Vue.component('IntegritySupport', {
  template: '<div class="">'+ IntegritySupportContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Support'
    };
  },
  created: function () {
      document.title = 'We Support Political Activity';
      $('meta[name=description]').attr('content', 'Employees must not communicate with public officials regarding Dell Technologies-related policy matters or claim to represent Dell Technologies.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});



var IntegrityRaiseContent = $('#integrity-raise-content').html();
var IntegrityRaise = Vue.component('IntegrityRaise', {
  template: '<div class="">'+ IntegrityRaiseContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Raise'
    };
  },
  created: function () {
      document.title = 'We Raise Issues & Concerns';
      $('meta[name=description]').attr('content', 'If you know of or suspect a violation of applicable laws or regulations, this Code or any policy, it is your responsibility to promptly report it.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var IntegrityInvestigateContent = $('#integrity-investigate-content').html();
var IntegrityInvestigate = Vue.component('IntegrityInvestigate', {
  template: '<div class="">'+ IntegrityInvestigateContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Investigate'
    };
  },
  created: function () {
      document.title = 'We Investigate and Address Concerns';
      $('meta[name=description]').attr('content', 'All investigations and any resulting corrective action will be conducted in compliance with local law, and applicable Dell policies and standards.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});



var IntegrityValuesContent = $('#integrity-values-content').html();
var IntegrityValues = Vue.component('IntegrityValues', {
  template: '<div class="">'+ IntegrityValuesContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Promote'
    };
  },
  created: function () {
      document.title = 'We Make Values-based Decisions';
      $('meta[name=description]').attr('content', 'The PULSE model provides a simple, clear structure when making challenging decisions.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});






// //////////////////////////////////////////////
// RESULTS COMPONENTS
// //////////////////////////////////////////////
var ResultsContent = $('#results-content').html();
var Results = Vue.component('Results', {
  template: '<div class="results-content category-landing">'+ ResultsContent +'</div>',
  data: function() {
    return {
      title: 'Results'
    };
  },
  created: function () {
      document.title = 'Dell Technologies Code of Conduct - Results';
      $('meta[name=description]').attr('content', 'We believe in being accountable to the exceptional standard of excellence and performance.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {

      app.title = "Results"

      currentCategory = 'results';

      DellCOC.app.showMainNav();
      $('#clone-container').show();

      $(".main-content .cta-video").on("click", function (e) {
        e.preventDefault();
        console.log("cta-video");
        DellCOC.app.player.play();
        var myVideo = document.getElementById("bc-player-video");
            myVideo.play();
      });

      $(".bc-player-container .modal-close-container .btn-close").on("click", function (e) {
          e.preventDefault();
          DellCOC.app.player.pause();
      });

      $(".main-content .cta-qa").on("click", function (e) {
        e.preventDefault();
        DellCOC.quiz.modal(currentCategory);
      });

      setTimeout(function () {
        DellCOC.app.loadVideo('5811891231001');
      },1500);

    });
  },
  beforeDestroy: function () {
    // console.log('DESTROYED!!!');
    // DellCOC.app.player.pause();
  }

});

// RESULTS ARTICLE
var ResultsArticleContent = $('#results-article-content').html();
var ResultsArticle = Vue.component('ResultsArticle', {
  template: '<div class="category-article">'+ ResultsArticleContent +'</div>',
  data: function () {
    return {
      title: 'Results Article'
    };
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      app.title = "Results"
      currentCategory = 'results';
      DellCOC.app.showMainNav();
      $('#clone-container').hide();
    })
  },
  destroyed: function () {
    console.log('DESTROYED!!!');
    $('.footer').remove();
  }

});

var ResultsSafeguardContent = $('#results-safeguard-content').html();
var ResultsSafeguard = Vue.component('ResultsSafeguard', {
  template: '<div class="">'+ ResultsSafeguardContent +'</div>',
  data: function () {
    return {
      title: 'Results Safeguard'
    };
  },
  created: function () {
      document.title = 'We Safeguard the Integrity of Financial Statements';
      $('meta[name=description]').attr('content', 'We Safeguard the Integrity of Financial Statements');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var ResultsAvoidContent = $('#results-avoid-content').html();
var ResultsAvoid = Vue.component('ResultsAvoid', {
  template: '<div class="">'+ ResultsAvoidContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Avoid Insider Trading';
      $('meta[name=description]').attr('content', 'Using material non-public information for personal financial gain, or sharing it with others for their financial gain, is prohibited.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var ResultsFollowAntiBriberyContent = $('#results-follow-anti-bribery-content').html();
var ResultsFollowAntiBribery = Vue.component('ResultsFollowAntiBribery', {
  template: '<div class="">'+ ResultsFollowAntiBriberyContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Follow Antibribery & Anticorruption Laws';
      $('meta[name=description]').attr('content', 'Dell Technologies earns business because we have the best products and solutions anywhere.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});

var ResultsFollowComplianceContent = $('#results-follow-compliance-content').html();
var ResultsFollowCompliance = Vue.component('ResultsFollowCompliance', {
  template: '<div class="">'+ ResultsFollowComplianceContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Follow Compliance with Trade Laws';
      $('meta[name=description]').attr('content', 'We comply with applicable laws regarding the import or export of goods, services, software & technologies in every country where we conduct business.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var ResultsPreventTheftContent = $('#results-prevent-theft-content').html();
var ResultsPreventTheft = Vue.component('ResultsPreventTheft', {
  template: '<div class="">'+ ResultsPreventTheftContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Prevent Theft and Fraud';
      $('meta[name=description]').attr('content', 'Theft and fraud are crimes and will not be tolerated. It damages our brand and tarnishes us all.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var ResultsPreventMoneyLaunderingContent = $('#results-prevent-money-laundering-content').html();
var ResultsPreventMoneyLaundering = Vue.component('ResultsPreventMoneyLaundering', {
  template: '<div class="">'+ ResultsPreventMoneyLaunderingContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Prevent Money Laundering & Terrorist Financing';
      $('meta[name=description]').attr('content', 'We take steps to prevent illegal use of business activities for money laundering and terrorist financing.');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


var ResultsTravelAndExpenseContent = $('#results-travel-and-expense-content').html();
var ResultsTravelAndExpense = Vue.component('ResultsTravelAndExpense', {
  template: '<div class="">'+ ResultsTravelAndExpenseContent +'</div>',
  data: function () {
    return {
      title: 'Innovation Avoid'
    };
  },
  created: function () {
      document.title = 'We Travel and Expense Responsibly';
      $('meta[name=description]').attr('content', 'Team members are expected to act in compliance with policies, and to truthfully, accurately and completely record travel and hospitality expenses');
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      DellCOC.app.articleLoaded();
      DellCOC.app.showMainNav();
      DellCOC.app.addMobileArticleNav();
    });
  },
  destroyed: function () {
    DellCOC.app.removeMobileArticleNav();
  }
});


// //////////////////////////////////////////////
// HOME
// //////////////////////////////////////////////
var Home = Vue.component('Home', {
  template: '<div class="main-content"></div>',
  data: function () {
    return {
      title: 'Home'
    };
  },
  methods: {
  },
  mounted: function () {
    // jQuery code
    $(function () {
      console.log(app);
      DellCOC.app.resetGrid();
      // do whatever you want with html and jquery
    });
  }
});



// ROUTES
var routes = [

  { path: '/message-from-the-ceo',
    component: Message,
    children: [
      { path: '', component: MessageDefault },
    ]
  },

  { path: '/how-we-win',
    component: HowWeWin,
    children: [
      { path: '', component: HowWeWinDefault },
    ]
  },

  { path: '/winning-together',
    component: Winning,
    meta: {
      title: 'Winning Together Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  { path: '/winning-together/article',
    component: WinningArticle,
    children: [
      { path: '', component: WinningValue },
      { path: '/winning-together/article/value', component: WinningValue },
      { path: '/winning-together/article/prevent', component: WinningPrevent },
      { path: '/winning-together/article/respect', component: WinningRespect },
      { path: '/winning-together/article/work', component: WinningWork },
      { path: '/winning-together/article/ensure', component: WinningEnsure },
      { path: '/winning-together/article/protect', component: WinningProtect }
    ]
  },

  { path: '/results', component: Results },

  { path: '/speak-up',
    component: SpeakUp,
    children: [
      { path: '', component: SpeakUpDefault },
    ]
  },

  { path: '/', component: Home }
];


if(window.location.href.indexOf("message-from-our-ceo.htm") > -1) {
  var routes = [
    { path: '/',
    component: Message,
    meta: {
      title: 'Customer Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    },
    children: [
      { path: '', component: MessageDefault }
    ]
  }
  ];
}else if(window.location.href.indexOf("how-we-win.htm") > -1) {
  var routes = [
    { path: '/',
    component: HowWeWin,
    meta: {
      title: 'Customer Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    },
    children: [
      { path: '', component: HowWeWinDefault }
    ]
  }
  ];
}else if(window.location.href.indexOf("speak-up.htm") > -1) {
  var routes = [
    { path: '/',
    component: SpeakUp,
    children: [
      { path: '', component: SpeakUpDefault }
    ]
  }
  ];
}else if(window.location.href.indexOf("customer.htm") > -1) {
  var routes = [
    { path: '/',
    component: Customer,
    meta: {
      title: 'Customer Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  { path: '/customer/article',
    component: CustomerArticle,
    children: [
      { path: '', component: CustomerProtect },
      { path: '/customer/article/protect', component: CustomerProtect },
      { path: '/customer/article/committed', component: CustomerCommitted },
      { path: '/customer/article/compete', component: CustomerCompete },
      { path: '/customer/article/promote', component: CustomerPromote },
      { path: '/customer/article/follow', component: CustomerFollow }
    ]
  },
  ];
} else if(window.location.href.indexOf("innovation.htm") > -1) {
  var routes = [
    { path: '/',
      component: Innovation,
      meta: {
        title: 'Innovation Page',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    { path: '/innovation/article',
      component: InnovationArticle,
      children: [
        { path: '', component: InnovationSafeguard },
        { path: '/innovation/article/safeguard', component: InnovationSafeguard },
        { path: '/innovation/article/safeguard-others', component: InnovationSafeguardOthers },
        { path: '/innovation/article/practice', component: InnovationPractice },
        { path: '/innovation/article/information', component: InnovationInformation },
        { path: '/innovation/article/communicate', component: InnovationCommunicate },
        { path: '/innovation/article/promote', component: InnovationPromote }
      ]
    }
  ];
} else if (window.location.href.indexOf("integrity.htm") > -1) {
  var routes = [
    { path: '/', component: Integrity},
    { path: '/integrity/article',
      component: IntegrityArticle,
      children: [
        { path: '', component: InnovationSafeguard },
        { path: '/integrity/article/avoid-conflicts', component: IntegrityAvoid },
        { path: '/integrity/article/give-and-accept', component: IntegrityGive },
        { path: '/integrity/article/engage', component: IntegrityEngage },
        { path: '/integrity/article/support', component: IntegritySupport },
        { path: '/integrity/article/raise', component: IntegrityRaise },
        { path: '/integrity/article/investigate', component: IntegrityInvestigate },
        { path: '/integrity/article/values', component: IntegrityValues }
      ]
    }
  ];
} else if (window.location.href.indexOf("results.htm") > -1) {
  var routes = [
    { path: '/', component: Results},
    { path: '/results/article',
      component: ResultsArticle,
      children: [
        { path: '', component: ResultsSafeguard },
        { path: '/results/article/safeguard', component: ResultsSafeguard },
        { path: '/results/article/avoid', component: ResultsAvoid },
        { path: '/results/article/follow-anti-bribery', component: ResultsFollowAntiBribery },
        { path: '/results/article/follow-compliance', component: ResultsFollowCompliance },
        { path: '/results/article/prevent-theft', component: ResultsPreventTheft },
        { path: '/results/article/prevent-money-laundering', component: ResultsPreventMoneyLaundering },
        { path: '/results/article/travel-and-expense', component: ResultsTravelAndExpense }
      ]
    }
  ];
} else if (window.location.href.indexOf("winning-together.htm") > -1) {
  var routes = [
    { path: '/', component: Winning},
    { path: '/winning/article',
      component: WinningArticle,
      children: [
        { path: '', component: WinningValue },
        { path: '/winning/article/value', component: WinningValue },
        { path: '/winning/article/prevent', component: WinningPrevent },
        { path: '/winning/article/respect', component: WinningRespect },
        { path: '/winning/article/work', component: WinningWork },
        { path: '/winning/article/ensure', component: WinningEnsure },
        { path: '/winning/article/protect', component: WinningProtect }
      ]
    }
  ];
} else {
  //
}


console.log(routes);
var router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: "hash"
});

// var Meta = VueMeta(app);
// console.log(Meta);

// Vue.use(Meta);

var app = new Vue({
  el: '#app',
  router: router,
  data: {
    message: 'Hello Vue!',
    title: 'Home'
  },
  methods:{

  }
}).$mount('#app');



var footerContent = $('#footer-content').html();
