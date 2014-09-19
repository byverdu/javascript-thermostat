feature "On the home page" do

	scenario "Before the user interaction starts" do
		visit '/'

		expect(page).to have_content('Thermostat')
	end
end