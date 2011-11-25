FactoryGirl.define do
  factory :event do
    name 'New Event'
    active true
  end

  factory :album do
    event
    name 'New Album'
  end
end

=begin

Factory.define :album, :parent => :event do |album|
  album.name  { "New Album" }
  album.after_create { |a| Factory(:event, :album => a) }
end

Factory.define :user do |user|
  user.email                 { Factory.next(:email) }
  user.password              { "password"   }
  user.password_confirmation { "password"   }
end

Factory.define :author, :parent => :user do |author|
  author.after_create { |a| Factory(:article, :author => a) }
end

Factory.define :recruiter, :parent => :user do |recruiter|
  recruiter.is_recruiter { true }
end
=end