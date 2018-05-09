/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it ('ensures it has a URL defined and is not empty', function(){
         		allFeeds.forEach(function(feedUrl){
         			//check to see if the url is defined
         			expect(feedUrl.url).toBeDefined();
         			//check to see if the url value is not null AND
         				//also is not set to an empty string. 
         				//toBeTruthy() handles both.
         			expect(feedUrl.url).toBeTruthy();
         		});
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it ('has a name defined and the name is not empty', function(){
         		allFeeds.forEach(function(feedUrl){
         			//same process as for the url
         			expect(feedUrl.name).toBeDefined();
         			expect(feedUrl.name).toBeTruthy();
         		});
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
    	 /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         var btn;
         beforeEach (function(){
         	btn = $("a.menu-icon-link").eq(0);
         });

         it ('should hide the menu on default', function(){
         	const bodyClass = document.querySelector('body').className;
         	//grab the bodyClass and check if the className is set to menu-hidden
         	expect(bodyClass).toBe("menu-hidden");
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it ('should display menu when clicked',
          	function(){
          		btn.click();

         		const menuOpen = document.querySelector('body').className;
          		expect(menuOpen).toBe("");

          		btn.click();
         		const menuClose = document.querySelector('body').className;
          		expect(menuClose).toBe("menu-hidden");
          	});	


    });
       

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function(){
    	/* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
        
}());
