Before('@chrome') do
  Capybara.current_driver = :selenium_chrome
end

Before('@firefox') do
  Capybara.current_driver = :selenium_firefox
end
