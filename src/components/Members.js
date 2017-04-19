import React, { Component } from 'react';

export default class Members extends Component{

	componentDidMount(){
		$(".col-lg-3, col-xs-12").hover(
			function(){
				$(this).addClass("darkbackground");
				$(this).find("p").css("display","block");
			}, function(){
				$(this).removeClass("darkbackground")
				$(this).find("p").css("display", "none");
			}
		);
	}

	render(){
		return(	
			<div>
				{ /* <h3> Current Members: </h3> */ }
				<div className="row">
					<div className="col-lg-3 col-xs-12">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Alisa White '17 </p>
							<p> Musical Director Emeritus </p>
							<p> Hometown: Slingerlands, NY </p>
							<p> Majors: Economics and Environmental Studies </p>
							<p> Something Random: I used to conduct beanie baby choirs. </p>
						</div>
					</div>

					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Alyssa Gonzalez '17 </p>
							<p> President Emeritus </p>
							<p> Hometown: McAllen, TX </p>
							<p> Major: Sociology </p>
							<p> Something Random: I have a mustache addiction...but I don't like them on real people. </p>
						</div>
					</div>

					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Daniel Shlien '18 </p>
							<p> Business Manager </p>
							<p> Hometown: Franklin Lakes, NJ </p>
							<p> Major: Economics </p>
							<p> Something Random: I am often mistaken for Morgan Freeman. </p>
						</div>
					</div>

					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Tara Joshi '18 </p>
							<p> President </p>
							<p> Hometown: Los Angeles, CA </p>
							<p> Major: Geography </p>
							<p> Something Random: I fell off a cliff when I was 3. </p>
						</div>
					</div>
				</div>	
				
				<div className="row">
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Justine Goggin '18 </p>
							<p> Musical Director </p>
							<p> Hometown: Old Greenwich, CT </p>
							<p> Majors: English and Theater </p>
							<p> Something Random: I met Raven Symone once, at Disney World, in front of the Matterhorn when she was filming Disney 365. I can honestly say I have never been more starstruck. </p>
						</div>
					</div>

					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Jacob Cutler '18 </p>
							<p> Business Manager Emeritus </p>
							<p> Hometown: Bethesda, MD </p>
							<p> Majors: History and Asian and Middle Eastern Studies </p>
							<p> Something Random: It has long been my dream to become a veterinarian. </p>
						</div>
					</div>


					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Morgan McGonagle '18 </p>
							<p> Hometown: Cherry Hills Village, CO </p>
							<p> Major: Mechanical Engineering </p>
							<p> Something Random: My favorite foods are avocados and peanut butter (but not together). </p>
						</div>
					</div>


					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Zakios Meghrouni-Brown '18 </p>
							<p> Hometown: Berkeley, CA </p>
							<p> Majors: Engineering and Studio Art </p>
							<p> Something Random: I don't even lift. </p>
						</div>
					</div>

				</div>



				{ /* <h3> Alumni </h3> */ }
				<div className="row">
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Tom Latta '18 </p>
							<p> Hometown: Los Altos Hills, CA </p>
							<p> Major: Undecided </p>
							<p> Something Random: I have a twin brother. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Emily Levine '19 </p>
							<p> Hometown: Lake Oswego, OR </p>
							<p> Major: Undecided </p>
							<p> Something Random: My favorite song is Barbie Girl by Aqua. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Christina Reagan '19 </p>
							<p> Hometown: Stuart, FL </p>
							<p> Major: Undecided </p>
							<p> Something Random: I am a huge fan of The Weeknd and have most of their songs memorized. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Malcolm Joung '19 </p>
							<p> Hometown: Bridgeport, CT </p>
							<p> Major: Chemistry </p>
							<p> Something Random: I own two chincillas named salt and pepper. </p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Michelle He '19 </p>
							<p> Hometown: New Smyrna Beach, FL </p>
							<p> Major: Undecided </p>
							<p> Something Random: I have hand raised and released three wild baby birds that fell from their nests. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Geoff Weber '19 </p>
							<p> Hometown: Boston, MA </p>
							<p> Major: Philosophy </p>
							<p> Something Random: I love a good dad joke as much as I love a good cigar. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Matthew Spencer '20 </p>
							<p> Hometown: Bethesda, MD </p>
							<p> Major: Biomedical Engineering </p>
							<p> Something Random: I once got rabies from petting a baby zebra. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Daniella Kubiak '20 </p>
							<p> Hometown: Laguna Niguel, CA </p>
							<p> Major: Biochemical Engineering </p>
							<p> Something Random: I used to have a pet frog and a pet snail and they were homies. </p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Benjamin Coleman '20 </p>
							<p> Hometown: Mount Kisco, NY </p>
							<p> Major: Computer Science </p>
							<p> Something Random: I've run a sub-2 minute 800m. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Aaron Samuels '20 </p>
							<p> Hometown: Westport, CT </p>
							<p> Major: Undecided </p>
							<p> Something Random: I've never seen a Star Wars movie. </p>
						</div>
					</div>
					<div className="col-lg-3 col-xs-12" id="memberPic">
						<div id="memberPic">
							<img height="200vh" width="200vh" src={"../../img/blankPic.jpeg"} />
						</div>

						<div className="image-cover">
							<p> Nashe Mutenda '20 </p>
							<p> Hometown: Tokyo, Japan </p>
							<p> Major: Civil Engineering </p>
							<p> Something Random: I've eaten alligator tail before. It was alright. </p>
						</div>
					</div>
				</div>
			</div>




		);
	}
}