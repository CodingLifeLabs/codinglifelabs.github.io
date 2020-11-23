__NUXT_JSONP__("/posts/core-git-commands", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{post:{slug:"core-git-commands",description:"실제 서비스 개발하면서 맨날 까먹는 Core git 명령어 핵심요약.",title:"Core Git 명령어 정리",tags:[w],toc:[{id:y,depth:l,text:z},{id:A,depth:l,text:B},{id:C,depth:l,text:D},{id:E,depth:l,text:F}],body:{type:"root",children:[{type:b,tag:m,props:{id:y},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#1-git%EC%9D%98-4%EA%B0%80%EC%A7%80-%EC%98%81%EC%97%AD",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"            -add-\u003E      -commit-\u003E     -push-\u003E\n+-------------+-------------+------------+-------------+\n| Working dir |    Index    | Local repo | Remote repo |\n+-------------+-------------+------------+-------------+\n         \u003C-checkout-                 \u003C-fetch or pull-\n"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"git은 일반적으로 4개의 영역으로 관리된다."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Working Directory (작업영역)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Repository (저장소)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Index (Staging Area)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Stash"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:A},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#2-git-workflow",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Jerry는 깃허브에서 'project’라는 이름의 원격 저장소를 만들었다."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"원격 저장소(Remote repository)"}]},{type:a,value:": 일반적으로 GitHub, GitLab 또는 BitBucket과 같은 호스팅 서비스에서 호스팅된 저장소."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이 원격 저장소를 "}]},{type:b,tag:j,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fgithub.com\u002Fjerry\u002Fproject.git "}]},{type:a,value:"명령으로 자신의 컴퓨터에 복사해 "},{type:b,tag:g,props:{},children:[{type:a,value:"로컬 저장소"}]},{type:a,value:"를 만들었다."},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"로컬 저장소(Local repository)"}]},{type:a,value:": 컴퓨터의 로컬 환경에 위치한 저장소."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"그리고 "},{type:b,tag:g,props:{},children:[{type:a,value:"작업 디렉토리"}]},{type:a,value:"에서 index.html 파일을 작성했다."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"작업 디렉토리(Working directory)"}]},{type:a,value:": 실제 파일이 위치한 디렉토리."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이 파일을 "}]},{type:b,tag:j,props:{},children:[{type:a,value:"git add index.html"}]},{type:a,value:" 명령으로 변경된(Modified) 파일들을 "},{type:b,tag:g,props:{},children:[{type:a,value:"스테이징"}]},{type:a,value:"해 "},{type:b,tag:g,props:{},children:[{type:a,value:"인덱스"}]},{type:a,value:" 영역에 등록했다."},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"스테이징(Staging)"}]},{type:a,value:": 확정할 변경 사항을 준비시키는 것."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"인덱스(Index)"}]},{type:a,value:": 확정할 준비가 된 변경 사항들이 모인 영역."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이어서 "}]},{type:b,tag:j,props:{},children:[{type:a,value:"git commit -m \"index.html 추가\" "}]},{type:a,value:" 명령으로 스테이징된(Staged) 변경 사항을 커밋해 로컬 저장소에 등록했다."},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"커밋(Commit)"}]},{type:a,value:": 인덱스의 변경 사항들을 확정하는 것. 여기까지는 로컬 저장소에서 일어나는 일이며, 아직 다른 사람에게는 변경 사항이 공개되지 않은 상태다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"헤드(HEAD)"}]},{type:a,value:": 작업 중인 브랜치의 선두를 가리키는 포인터. 헤드 이하의 커밋들을 확정된 것으로 취급하며, 필요에 따라 특정 커밋이나 브랜치를 가리키도록 헤드를 움직여 작업 디렉토리의 상태를 바꿀 수 있다."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"마지막으로 "}]},{type:b,tag:j,props:{},children:[{type:a,value:"git push origin master"}]},{type:a,value:" 명령으로 "},{type:b,tag:g,props:{},children:[{type:a,value:"푸시"}]},{type:a,value:"해 커밋된(Committed) 변경 사항을 원격 저장소에 게시했다."},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"푸시(Push)"}]},{type:a,value:": 확정된 변경 사항을 원격 저장소에 게시하는 것. 드디어 변경 사항이 공개된다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"origin"}]},{type:a,value:": 로컬 저장소의 원본 원격 저장소. clone 과정에서 자동으로 등록된다. clone으로 로컬 저장소를 만든 것이 아니라면 따로 추가해야 한다."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:C},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#3-remote-push-%ED%95%98%EA%B8%B0%EC%A0%84-%EC%BB%A4%EB%B0%8B-%EB%90%98%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:"table",props:{className:["table-auto","border","rounded"]},children:[{type:a,value:c},{type:b,tag:"tbody",props:{},children:[{type:b,tag:t,props:{className:[u,"bg-green-300"]},children:[{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"옵션"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"HEAD의 위치"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Index\u002FStaging Area"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:"Working Directory"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"soft"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"mixed"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"hard"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Index랑 WD 수정사항 살리고 커밋만 이전커밋으로(soft)"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"git reset --soft HEAD^"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"WD 수정사항만 살리고 이전커밋으로(mixed)"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"git reset --mixed HEAD^"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Index랑 WD 수정사항 버리고 완전히 이전커밋으로(hard)"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"git reset --hard HEAD^"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:E},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#4-remote-push-%ED%9B%84%EB%9D%BC%EB%A9%B4-",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"reset 대신 revert를 사용하자. (또는 공용브런치의 경우)"}]},{type:a,value:c}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fcore-git-commands",extension:".md",createdAt:"2020-11-22T13:38:06.354Z",updatedAt:"2020-11-23T01:36:59.247Z"},tags:{git:{slug:w,name:w}},prev:{slug:"travis-github-setting",title:"Nuxt-Content 배포자동화시 주의할 점"},next:null}],fetch:[],mutations:void 0}}("text","element","\n","li","\n    ","p","strong","td","ul","pre","변경함",2,"h2","a","true",-1,"span","icon","icon-link","tr","text-center","th","git","변경 안 함","1-git의-4가지-영역","1. Git의 4가지 영역","2-git-workflow","2. Git WorkFlow","3-remote-push-하기전-커밋-되돌아가기","3. remote push 하기전 커밋 되돌아가기","4-remote-push-후라면-","4. remote push 후라면 ?")));