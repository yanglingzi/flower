
var gulp=require("gulp");

gulp.task("copyHTML",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flowerdemo"));
});

gulp.task("copyimg",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flowerdemo\\img"))
});

gulp.task("copycss",function(){
	gulp.src("css/iconfont.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flowerdemo\\css"))
});
gulp.task("copyfont",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flowerdemo\\font"))
});
gulp.task("copyjs",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flowerdemo\\js"))
});

gulp.task("watchall",function(){
	gulp.watch("index.html",["copyHTML"]);
	gulp.watch("img/**/*",["copyimg"]);
	gulp.watch("js/**/*",["copyjs"]);
	
});

 