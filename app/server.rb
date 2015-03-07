require 'sinatra'
require 'sinatra/partial'
require 'pry'

require_relative 'models/user.rb'

class CodeAdv < Sinatra::Application

    set :public_folder, File.join(File.dirname(__FILE__), '..', 'public')

	use Rack::MethodOverride

    enable :sessions
	set :session_secret, 'super secret' 
    
    get '/' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name])
        erb :index
    end

    post '/first_week' do
    	redirect to('/first_week')
    end

    get '/first_week' do
    	erb :first_week
    end

end