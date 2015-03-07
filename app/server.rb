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

    get '/intro' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name])
    	erb :intro
    end

    get '/not_available' do
    	erb :not_available
    end

    get '/dress' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name])
    	erb :dress
    end

    get '/breadcrumbs' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name])
    	erb :breadcrumbs
    end

    get '/house' do
    	erb :house
    end

    get '/results' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name])
    	erb :results
    end
end