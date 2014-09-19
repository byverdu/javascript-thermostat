require "sinatra/base"

class Thermostat < Sinatra::Base

	set :views, Proc.new { File.join(File.dirname(__FILE__), './app/views') }

	get '/' do
		erb :index
	end
end