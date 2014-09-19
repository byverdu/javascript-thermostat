feature "On the home page" do

	scenario "Before the user interaction starts" do
		visit '/'

		expect(page).to have_content('Thermostat')

		expect(page).to have_content('20')
		
		expect(page).to have_button('Celsius')
		expect(page).to have_button('Fahrenheit')
		
		expect(page).to have_selector('input[value="Saving Mode"]')

		expect(page).to have_content('↑')
		expect(page).to have_content('↓')

	end
end