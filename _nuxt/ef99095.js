(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{282:function(t,e,n){"use strict";n.r(e);n(71),n(51),n(20),n(25);var r=n(3),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d,m,v,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,c=parseInt(r.number),e.next=4,n("tags").where({slug:{$contains:r.slug}}).limit(1).fetch();case 4:return l=e.sent,d=l.length>0?l[0]:{},e.next=8,n("posts").where({tags:{$contains:d.name}}).only(["createdAt","description","path","title"]).sortBy("createdAt","desc").limit(10).skip(9*(c-1)).fetch();case 8:if((m=e.sent).length){e.next=11;break}return e.abrupt("return",o({statusCode:404,message:"No posts found!"}));case 11:return v=10===m.length,x=v?m.slice(0,-1):m,e.abrupt("return",{nextPage:v,posts:x,pageNo:c,tag:d});case 14:case"end":return e.stop()}}),e)})))()},computed:{prevLink:function(){return 2===this.pageNo?"/":"/tag/".concat(this.tag.name,"/page/").concat(this.pageNo-1)}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=n(21),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("NuxtLink",{attrs:{to:"/"}},[n("p",{staticClass:"hover:underline"},[t._v("\n      Back to All Posts\n    ")])]),t._v(" "),n("h3",{staticClass:"mb-4 font-extrabold text-4xl"},[t._v("\n    Tag: "+t._s(t.tag.name)+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto"},t._l(t.posts,(function(e){return n("div",{key:e.path},[n("p",{staticClass:"text-gray-500 text-md font-hairline"},[t._v("\n        "+t._s(t.formatDate(e.createdAt))+"\n      ")]),t._v(" "),n("nuxt-link",{attrs:{to:e.path}},[n("h3",{staticClass:"heading font-bold text-2xl"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),n("p",{staticClass:"mt-4 text-lg text-gray-600"},[t._v("\n        "+t._s(e.description)+"\n      ")]),t._v(" "),n("p",{staticClass:"tags"},t._l(e.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v("\n         \n        ")],1)})),0),t._v(" "),n("nuxt-link",{attrs:{to:e.path}},[n("p",{staticClass:"text-green-400 font-bold text-md"},[t._v("\n          Read more\n        ")])])],1)})),0),t._v(" "),n("section",{staticClass:"text-center mt-8",attrs:{id:"prev-next"}},[n("nuxt-link",{staticClass:"border p-2 rounded shadow mr-2",attrs:{to:t.prevLink}},[t._v("\n      Prev page\n    ")]),t._v(" "),t.nextPage?n("nuxt-link",{staticClass:"border p-2 rounded shadow",attrs:{to:"/page/"+(t.pageNo+1)}},[t._v("\n      Next page\n    ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);