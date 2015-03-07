require 'sinatra'
require 'data_mapper'
require 'rack-flash'
require 'securerandom'

	use Rack::Flash
	use Rack::MethodOverride

class Fileww < Sinatra::Application

    set :public_folder, File.join(File.dirname(__FILE__), '..', 'public') 
    
    get '/' do
        erb :index
    end

end