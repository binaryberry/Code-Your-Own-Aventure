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

    post '/dress_color' do
    	session[:dress]=params[:color]
    	redirect to('/dress_color')
    end

    get '/dress_color' do
    	session[:dress_color]=params[:color_input]
    	@user = User.new(session[:name], session[:dress_color])
    	erb :dress_color
    end

    get '/breadcrumbs' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name], session[:dress_color])
    	erb :breadcrumbs
    end

    get '/house' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name], session[:dress_color])
    	erb :house
    end

    get '/results' do
    	session[:name]="Ellie"
    	@user = User.new(session[:name], session[:dress_color])
    	erb :results
    end

    get '/get_lost' do
        session[:name]="Ellie"
        @user = User.new(session[:name], session[:dress_color])
        erb :get_lost
    end

    get '/wake_up' do
        session[:name]="Ellie"
        @user = User.new(session[:name], session[:dress_color])
        erb :wake_up
    end
end