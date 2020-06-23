// 'use strict';
if (window.location.href.indexOf("localhost") > -1 
	|| window.location.href.indexOf("thisisarebellion.com") > -1 
	|| window.location.href.indexOf("rebellion-workspace") > -1) 
{
	$("head").append("<base href=\"/rebellion-workspace/dell-coc/html/index.htm\">");
}else{
	$("head").append("<base href=\"/en-us/testing/dell-coc-vue.htm\">");
}


const Bar = { template: '<div class="main-content">bar</div>' }

const Innovation = Vue.component('Innovation', {
  template: `<div class="main-content">

  <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-12 col-xlg-12 col-xxlg-12">
            <div class="heading text-center">Innovation</div>

            <div class="sub-heading col-8 mx-auto text-center">We believe our ability to consectetur adipiscing elit. Fusce semper gravida cursus. Suspendisse quis imperdiet turpis.</div>

            <p class="col-8 mx-auto text-center">Nulla molestie massa quam, a commodo dolor iaculis non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum egestas gravida accumsan.</p>

            <div class="cta-container text-center">
              <a href="#" class="cta-link  gt-arrow aqua"><span>Watch The Innovation Video</span></a>
              <a href="#" class="cta-link  gt-arrow aqua"><span>What is your Innovation IQ?</span></a>
            </div>

            <!-- <button v-on:click="/results.htm">We Safeguard Our Confidential Information</button> -->
            <div class="text-center">
            <ul>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>
              <li>
                <a class="" href="#/innovation/safeguard">
                  We Safeguard Our Confidential Information
                </a>
              </li>

            </ul>
              
              
            </div>
            
          </div>
        </div>
      </div>

  </div>`,
  data() {
    return {
      title: 'Innovation'
    }
  },
  methods: {
  },
  mounted: () => {
    // jQuery code
    $(function () {
      console.log(app)
      app.cloneAndScale('innovation')
      // do whatever you want with html and jquery
    })
  }
});


const InnovationSafeguard = Vue.component('InnovationSafeguard', {
  template: `<div class="main-content">

  <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-12 col-xlg-12 col-xxlg-12">
            <div class="heading text-center">Innovation Safeguard</div>
          </div>
        </div>
      </div>

  </div>`,
  data() {
    return {
      title: 'Innovation Safeguard'
    }
  },
  methods: {
  },
  mounted: () => {
    // jQuery code
    $(function () {
      console.log(app)
      app.cloneAndScale('innovation')
      // do whatever you want with html and jquery
    })
  }
});

const Results = Vue.component('Results', {
  template: `<div class="main-content">{{title}}</div>`,
  data() {
    return {
      title: 'Results'
    }
  },
  methods: {
  },
  mounted: () => {
    // jQuery code
    $(function () {
      app.cloneAndScale('results')
      // do whatever you want with html and jquery
    })
  }
});

const Home = Vue.component('Home', {
  template: `<div class="main-content"></div>`,
  data() {
    return {
      title: 'Home'
    }
  },
  methods: {
  },
  mounted: () => {
    // jQuery code
    $(function () {
      console.log(app);
      app.resetGrid();
      // do whatever you want with html and jquery
    })
  }
});


const routes = [
  { path: '/innovation/safeguard', component: InnovationSafeguard },
  { path: '/innovation', component: Innovation },
  { path: '/results', component: Results },
  { path: '/', component: Home }
]


const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "hash"
})




var app = new Vue({
  el: '#app',
  ns: window.NAMESPACE,
  router,
  data: {
    message: 'Hello Vue!'
  },
  methods:{
  	goTo_home: function (){
  		this.$router.push('/');
  		$(".slider-container").removeClass("show");
  	},
  	goToGrid: function () {
  		$(".slider-container").addClass("show");
  		// this.$router.push('/grid')
  	},
  	clickGridItem: function (gID) {
  		console.log(gID);
  		NAMESPACE.app.cloneAndScale(gID);
  		// this.$router.push('/foo')
  	},
  	cloneAndScale: function (gi) {
      console.log(gi)
        if ($('.grid-item.clone').length > -1) {
          $('.grid-item.clone').fadeOut(function () {
            this.remove()
          })
        }
        var gridItem = $('.grid-item.' + gi)
        console.log(gridItem)
        var offset = gridItem.offset()
        var height = gridItem.outerHeight()
        var width = gridItem.outerWidth()

        console.log('offset.top: ' + offset.top)
        console.log('offset.left: ' + offset.left)
        // var clone = gridItem.clone().appendTo('.layout.application--wrap.bootstrap-delltech')
        var clone = gridItem.clone().appendTo('#clone-container .container-fluid')
        clone.removeClass('col-4')
        clone.addClass('clone')
        clone.css('position', 'absolute')
        clone.css('top', offset.top)
        clone.css('left', offset.left)
        clone.css('height', height)
        clone.css('width', width)
        clone.html('')

        clone.animate({
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh'
        }, 600)

        $('#section-start-container').animate({
          opacity: 0
        }, 400, function () {
          $('#section-main-nav').fadeIn()
        })
        // clone.height(height);
      },
      resetGrid: function () {
        console.log('resetGrid');
        var slider = document.getElementById('slider-container');
        if (slider) {
          // slider.classList.remove('show')
        }

        // fade out clone and remove
        $('.grid-item.clone').fadeOut('slow', function () {
          this.remove()
        })
        $('#section-main-nav').hide();
        $('#section-start-container').animate({
          opacity: 1
        }, 300);
      }
  }
}).$mount('#app');