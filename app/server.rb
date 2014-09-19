require "sinatra/base"

class Thermostat < Sinatra::Base

	get '/' do
		erb :index
	end
end