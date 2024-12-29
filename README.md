# cypressAutomationProject
Complete project learned from Rahul Shetty Udemy

Important outcome of the project

	cy.on('window:alert',(str))	is to fire an event on browser
		cypress doesn't have any assertions in it, it uses mocha framework to handle assertions like, expect(), should(), assert()
		cypress mostly performs its all operation in same window, it doesn't work on child window, to we have to tweak to load in same page
jQuery function	invoke('removeAttr', 'target').click()	we have 'target' attribute which is  = _blank, will open in next tab and cypress can't handle that new tab
		If after clicking on the button new child window is opening with new domain, then cypress doesn't allow us to work on that
	cy.origin('webiste', ()=>{})	Need to provide the website name which will be opened after clicking on the parent page, if domain name is differing
	tr td:nth-child(2)	
	show	No direct support for mouseover action in cypress as they are very flacky, so we will do this by jQuery. We have invoke('show') to handle this.
	cy.get().click({force:true})	cypress can handle hidden element by directly working with DOM, if we want to click an hidden element just force:true
	.prop()	to get the properties of any element
	cy.frameLoaded(#frameID)	By default cypress doesn't support frames, so we need to download iframe plugin
	cy.iframe().find('Locator')	
	cy.get().filter(:contains("Nokia Edge"))	
		When handling calander always remember to get the desired values like date, month, year and click on the calander, look for the example
![image](https://github.com/user-attachments/assets/5eeaed3f-ed40-4cc3-8c72-94c0cb29ccef)

