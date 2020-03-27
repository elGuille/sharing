<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>YOA - Your Own Adventure</title>
		
        <link rel="icon" href="images/Yoa_logo_blackwhite.png" type="image/x-icon">
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
		<link rel="stylesheet" href="css/fonts.css" />
		<link rel="stylesheet" href="css/bootstrap.weber.css" />
		<link rel="stylesheet" href="css/fx.css" />
		<link rel="stylesheet" href="css/custom.css" />
		<link rel="stylesheet" href="css/index.css" />
		
	</head>
    <body class="light-page">
		<div id="wrap">
			<nav id="nav-logo-menu-2" class="navbar navbar-expand-lg border-bottom light">
    			<div class="container">
        			<div class="row align-items-center">
            			<div class="col-auto mr-auto">
                			<a class="navbar-brand" href="#">
                        			<img src="images/Yoa_logo_blackwhite.png" height="50px" class="mw-100 mt-10 mb-10" alt="logo" srcset="">
                    			</a>
            			</div>
            			<div class="col-auto hidden-lg">
                			<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".main-menu-collapse" aria-controls="navbarMenuContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
            			</div>
            			<div class="col-lg-auto collapse navbar-collapse main-menu-collapse">
                			<ul class="navbar-nav ml-auto" style="">
                    
                    
                    
                    
                			<li class="nav-item">
                        			<a class="nav-link" href="https://apps.apple.com/us/app/yoa-short-interactive-videos/id1478207998?ls=1" style="">Install</a>
                    			</li></ul>
            			</div>
        			</div>
    			</div>
    			<div class="bg-wrap">
        			<div class="bg"></div>
    			</div>
			</nav><section id="desc-img-text-9--1" class="pt-75 pb-75 pt-md-100 pb-md-100 light">
    			<div class="container">
        			<div class="row align-items-center">
            			<div class="col-md-6 col-lg-5 order-md-2" style="">
                            <div class="rounded">


                                <!-- PROFILE PIC -->

            				    <img src="https://yoa-yoaenviron.s3-ap-northeast-1.amazonaws.com/profilePics/7880c9ec-47f1-4555-a00d-1b715146f3e4.jpeg" alt="image" height="110;" width="110;"style="transform: translate3d(0px, 0px, 0px);">
                            </div>


                            <!-- PREFERRED NAME -->

                            <h3>Username: <?php echo $_GET["un"]; ?><br>
                            Your id is: <?php echo $_GET["id"]; ?></h3>

                            <?php 
                            if (isset($_GET['un'])) {
                             echo $_GET['un']; 
                         }

                			<h3><strong class="">HeartLover</strong></h3>
                			<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 100 20" width="100" class="mb-30 svg-secondary"><path d="m0 9h100v2h-100z" fill-rule="evenodd"></path></svg>


                            <!-- CAPTION -->

                			<p class="mb-30 lead" style="">How to fix frizz</p>
                			<ul class="list-unstyled padding-x2-list separate-list mb-50">                    
                			</ul>
                			<a class="btn btn-outline-warning light" href="https://apps.apple.com/us/app/yoa-short-interactive-videos/id1478207998?ls=1" style=""><span style=""><strong class="">  Get it now</strong></span></a>
            			</div>

            			<div class="col-md-6 col-lg-4 mr-auto order-md-1 text-center">
                			<!-- <div class="content-box d-inline-block">
                    			<img class="mw-100 mt-lg-0 rounded" src="https://yoa-yoaenviron.s3-ap-northeast-1.amazonaws.com/1579604656_kali/1579604656_kali_000.mp4" alt="image" height="640;" style="transform: translate3d(0px, 4px, 0px);">
                			</div> -->

                			<!-- VIDEO SELECT -->
				<div id="container">
				  <video controls autoplay loop>

                    <!-- INTRO VIDEO -->

				    <source src="https://yoa-yoaenviron.s3-ap-northeast-1.amazonaws.com/1579604656_kali/1580093090_BuzzKick1_000.mp4">
				  </video>

                  <!-- OPTION A -->

				  <div id="changeVideoA">Not so much help</div>
                  <div id="changeVideoC" style="display:none;">Start Again</div>

                  <!-- OPTION B -->
				  <div id="changeVideoB">A lot of help</div>
				</div>
                			
            			</div>
        			</div>
    			</div>
    			<div class="bg-wrap">
        			<div class="bg"></div>
    			</div>

			<style></style><script type="text/javascript">
			</script></section>
            <section id="action-img-text" class="pb-md-50 text-center dark pt-30 spr-edit-el spr-oc-show spr-wout">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" style="">
            	<h2 style="" class="spr-tm-1582719986884 text-right mb-0"><strong class="">Get it now free!</strong></h2>
            </div>

            <div class="col-md-auto" style="">
                <a class="btn btn-image smooth" href="https://apps.apple.com/us/app/yoa-short-interactive-videos/id1478207998?ls=1"> <img src="./images/btn-apple.png" srcset="./images/btn-apple@2x.png 2x"></a>
            </div>

            <div class="col-md-auto order-md-1">
                <div class="content-box d-inline-block">
                    
                </div>
            </div>
        </div>
    </div>
    <div class="bg-wrap">
        <div class="bg"></div>
    </div>
</section>



		</div>
		<footer></footer>
		<div class="modal-container"></div>
		
		
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCByts0vn5uAYat3aXEeK0yWL7txqfSMX8"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/jquery.smooth-scroll.min.js"></script>
		<script src="js/custom.js"></script>
		<script src="js/index.js"></script>
	</body>
</html>