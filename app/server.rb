require "sinatra/base"

class Thermostat < Sinatra::Base

	set :views,         Proc.new { File.join(File.dirname(__FILE__), 'views') }
	set :public_folder, Proc.new { File.join(File.dirname(__FILE__), 'public') }

	get '/' do
		erb :index
	end
end